import { getDocumentCollections } from '@oxcyn/firebase'
import { type Contents } from '@/types/contents'

export async function getContents() {
  const response = getDocumentCollections<Contents>(
    'contents',
    'personal',
    'oxcyn#getContents'
  )

  return response
}
