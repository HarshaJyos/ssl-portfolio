const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables from .env if present
try {
  const dotenvPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(dotenvPath)) {
    const envFile = fs.readFileSync(dotenvPath, 'utf8');
    envFile.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim();
        process.env[key] = value;
      }
    });
  }
} catch (e) {
  // Ignore errors loading .env
}

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  console.error("Error: FIGMA_TOKEN environment variable is not defined in .env");
  process.exit(1);
}
const FILE_KEY = '9guQg63b0SB5BD74BTekEm';

const pngAssets = {
  "imgCtaSectionImage": "2989bceddcdfbae209694592b1d2bcde74408cd8",
  "imgSsl2": "3bffc0e19cb39cdce799d4fef6a01162ec338517",
  "imgIconBackground": "5b1b44786822d8729f489d98052d5e853242347e",
  "imgIconBackground1": "a8a1edeccf317711d174fe43fa781153d807e543",
  "imgIconBackground2": "d35f701547abc44362214441f1d20b14732ac526",
  "imgIconBackground3": "b437dd871010cee8ab0efa61413b27af47727cae",
  "imgHeaderBadgeImage": "740195ef0dfd000dda69b6abbfa3df84078de0e0",
  "imgHeaderLogoImage": "cd67b0f22ffddab8849794bf41d291d592817a87",
  "imgIconBackground4": "2fd5ddfa220201a82e45d88542a3e35e6537f029",
  "imgServicesImage": "7cf77ee1212277e51aaf2f77f362d507951d82fc",
  "imgServicesImage1": "143b9fa3297c7293fa7e90374604daa0976c4de3",
  "imgServicesImage2": "3b6e3729d95c92a627c5e13a241726cc96f205e2",
  "imgServicesImage3": "8464f3119ce0611742bd13792777b33f90d9b216",
  "imgServicesImage4": "0fe9276eba9d62d39f826902904e2042cad46919",
  "imgOtherServicesImage": "34ef537ddabbd93fa7345bdb72a7dee61e89e027",
  "imgEllipse32": "649aa2e57e1187ccdf23d68b09b30088fca91cd7",
  "imgEllipse33": "0a9836d437947dfc06f7fece7df9186e649d53a9",
  "imgEllipse34": "7a7912b7039f5de6aa60169e2b0f737681df888a",
  "imgServiceImage": "14dfe01f248dbcbbda460e141c868ee9872e21fd",
  "imgServiceImage1": "58bbf62c27aba9fa6f166d46ecaa743a0791503a",
  "imgServiceImage2": "6caf2aac77f0c6947c8ca862148f990ecd945f44",
  "imgServiceImage3": "a2066046f4517d10d2ae4c237ba301d5f653f423",
  "imgCategoryImage": "07cf236f6d7b7d89dd5ac3eadc0d60207fad4ff3",
  "imgArticleImage": "71e7e1d12447e50a258db9db9a53258abe84fa45",
  "imgArticleImage1": "2ad6aa25cfef8fe399a218f4ff7e0a49b7c907cc"
};

const svgAssets = {
  "imgSubtract": "25:3",
  "imgSubtract1": "25:8",
  "imgEllipse49": "25:23",
  "imgSsl1": "25:25",
  "imgIconBadgeContainer": "25:29",
  "imgSubtract2": "25:79",
  "imgSubtract3": "25:93",
  "imgSubtract4": "25:103",
  "imgSubtract5": "25:108",
  "imgSubtract6": "25:113",
  "imgSubtract7": "25:118",
  "imgIcRoundPeople": "25:171",
  "imgBoxiconsBadgeCheckFilled": "25:177",
  "imgFa7SolidHandshake": "25:183",
  "imgEllipse51": "25:194",
  "imgEllipse1": "25:197",
  "imgEllipse50": "25:206",
  "imgSolarEyeBold": "25:210",
  "imgOcticonGoal16": "25:213",
  "imgFontistoPerson": "25:217",
  "imgLine1": "25:286",
  "imgOcticonGoal17": "25:290",
  "imgBxAnalyse": "25:294",
  "imgMaterialSymbolsGraph5": "25:297",
  "imgStreamlineFlexDecentWorkAndEconomicGrowthSolid": "25:299",
  "imgSolarWalletMoneyBold": "25:301",
  "imgBxsUpArrow": "25:363",
  "imgPaginationEllipsis": "25:367",
  "imgMdiInstagram": "25:392",
  "imgIconoirTwitter": "25:394",
  "imgMynauiFacebook": "25:396",
  "imgIcBaselineWhatsapp": "25:398",
  "imgFooterLogoBackground": "25:467",
  "imgEllipse35": "25:478",
  "imgFluentCall16Filled": "25:480",
  "imgGroup": "25:483"
};

const assetsDir = path.join(__dirname, '..', 'public', 'assets');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Fetching file images map from Figma REST API...');
  const imagesResponse = await fetchJson(`https://api.figma.com/v1/files/${FILE_KEY}/images`);
  const imageMap = imagesResponse.meta.images;

  // 1. Download PNGs
  for (const [name, hash] of Object.entries(pngAssets)) {
    const url = imageMap[hash];
    if (url) {
      const dest = path.join(assetsDir, `${name}.png`);
      console.log(`Downloading ${name} (${hash}.png)...`);
      try {
        await downloadFile(url, dest);
        console.log(`Downloaded ${name}`);
      } catch (err) {
        console.error(`Failed to download ${name}:`, err.message);
      }
    } else {
      console.warn(`Warning: Image hash ${hash} for ${name} not found in figma images response`);
    }
  }

  // 2. Download SVGs
  console.log('Requesting SVG rendering for vector nodes from Figma REST API...');
  const nodeIds = Object.values(svgAssets).join(',');
  const svgResponse = await fetchJson(`https://api.figma.com/v1/images/${FILE_KEY}?ids=${nodeIds}&format=svg`);
  const svgMap = svgResponse.images;

  for (const [name, id] of Object.entries(svgAssets)) {
    const url = svgMap[id];
    if (url) {
      const dest = path.join(assetsDir, `${name}.svg`);
      console.log(`Downloading SVG ${name} (node ${id})...`);
      try {
        await downloadFile(url, dest);
        console.log(`Downloaded SVG ${name}`);
      } catch (err) {
        console.error(`Failed to download SVG ${name}:`, err.message);
      }
    } else {
      console.warn(`Warning: SVG url for node ${id} (${name}) not found in figma API response`);
    }
  }

  console.log('Assets download completed successfully!');
}

run().catch(console.error);
