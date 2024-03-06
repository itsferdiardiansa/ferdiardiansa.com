import { getDocumentCollections } from '@oxcyn/firebase'

type AboutMe = {
  title: string
  subTitle: string
  shortBio: string
  greeting: string
}

type SpeaksHighlighted = {
  author: string
  items: string[]
}

export async function getAboutMe() {
  const response = await getDocumentCollections<AboutMe>(
    'profile',
    'aboutMe',
    'oxcyn#getAboutMe'
  )

  return response
}

export async function getSpeaksHighlighted() {
  const response = await getDocumentCollections<SpeaksHighlighted>(
    'profile',
    'speaksHighlighted',
    'oxcyn#getSpeaksHighlighted'
  )

  return response
}
