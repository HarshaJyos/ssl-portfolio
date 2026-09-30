import canUseDOM from './canUseDOM'

export const getServerSideURL = () => {
  if (process.env.NODE_ENV === 'production') {
    const url = process.env.NEXT_PUBLIC_SERVER_URL
    if (url && !url.includes('localhost') && !url.includes('127.0.0.1')) {
      return url
    }
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    }
    return 'https://www.sslfintech.org'
  }

  return (
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000')
  )
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.NODE_ENV === 'production') {
    const url = process.env.NEXT_PUBLIC_SERVER_URL
    if (url && !url.includes('localhost') && !url.includes('127.0.0.1')) {
      return url
    }
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    }
    return 'https://www.sslfintech.org'
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
}
