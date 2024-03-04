import { getDocumentCollections } from '@oxcyn/firebase'

type CoreSkill = {
  title: string
  items: string[]
}

type HeaderSkill = {
  title: string
  subtitle: string
}

type Skill = {
  headers: HeaderSkill
  core: CoreSkill[]
  others: string[]
}

export async function getSkills() {
  const response = await getDocumentCollections<Skill>(
    'tech',
    'skills',
    'oxcyn#getSkills'
  )

  return response
}
