type BasicInfo = {
  name: string
  pronouns: string
  role: string
  description: string
}

type About = {
  title: string
  items: string[]
}

export type CareerTimeline = {
  title: string | null
  subTitle: string | null
  description: string
  link: string | null
  time: string
  techStacks: string[]
}

export type Contents = {
  basicInfo: BasicInfo
  about: About
  career: CareerTimeline[]
}
