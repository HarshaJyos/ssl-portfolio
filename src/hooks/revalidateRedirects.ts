import type { CollectionAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating redirects`)

  try {
    revalidateTag('redirects', 'max')
  } catch (err) {
    payload.logger.warn(`Error revalidating redirects: ${err instanceof Error ? err.message : String(err)}`)
  }

  return doc
}
