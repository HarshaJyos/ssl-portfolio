import React from 'react'
import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact Us | SSL Fintech',
  description: 'Reach out to our Bengaluru financial team. Apply for personal and business loans or request wealth assessment support.',
  alternates: {
    canonical: '/contact',
  },
}

export default function Page() {
  return <ContactClient />
}
