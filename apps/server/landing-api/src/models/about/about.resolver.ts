import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { About } from './schema/about.models'
import { UpdateAboutInput } from './dto/update-about.input'
import { AboutService } from './about.service'

@Resolver(() => About)
export class AboutResolver {
  constructor(private readonly aboutService: AboutService) {}

  @Query(() => About)
  about() {
    return this.aboutService.find()
  }

  @Mutation(() => About, {
    description: 'Update about data',
  })
  updateAbout(@Args('aboutData') aboutData: UpdateAboutInput) {
    return this.aboutService.update(aboutData)
  }
}
