import React from 'react'
import ToolsClient from './ToolsClient'

export const metadata = {
  title: 'Financial Tools & Calculators | SSL Fintech',
  description: 'Estimate payment schedules, SIP returns, delays, and goal corpuses dynamically with our specialized EMI, SIP, and delay cost planners.',
  alternates: {
    canonical: '/tools',
  },
}

export default function Page() {
  return <ToolsClient />
}
