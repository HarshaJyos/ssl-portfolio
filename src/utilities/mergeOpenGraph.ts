import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Secure personal loans, business loans, and home loans in Bengaluru. SSL Fintech provides fast-track loan aggregation and NJ Wealth mutual fund investments.',
  images: [
    {
      url: `${getServerSideURL()}/assets/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'SSL Fintech - Personal Loans & Wealth Solutions in Bengaluru',
    },
  ],
  siteName: 'SSL Fintech',
  title: 'SSL Fintech | Personal Loans & Mutual Funds Bengaluru',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
