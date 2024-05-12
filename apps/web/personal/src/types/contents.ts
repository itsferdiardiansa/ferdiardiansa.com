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
  title: string
  subTitle: string
  description: string
  link: string
  time: string
  techStacks: string[]
}

export type Contents = {
  basicInfo: BasicInfo
  about: About
  career: CareerTimeline[]
}
