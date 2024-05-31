import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { About } from './models/about.models'
import { NewAboutInput } from './dto/new-about.input'

@Resolver((of: any) => About)
export class AboutResolver {
  @Query(returns => About)
  about() {
    return {
      title: 'About Me',
      items: [],
      lastUpdate: new Date(),
    }
  }

  @Mutation(returns => About)
  updateAbout(@Args('newAboutData') aboutData: NewAboutInput) {
    return []
  }
}
