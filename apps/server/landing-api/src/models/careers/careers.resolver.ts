import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Careers } from './schema/careers.models'
import { CareersService } from './careers.service'
import { CreateCareerInput } from './dto/create-career.input'
import { DeleteCareerInput } from './dto/delete-career.input'
import { UpdateCareerInput } from './dto/update-career.input'

@Resolver(() => Careers)
export class CareersResolver {
  constructor(private readonly careersService: CareersService) {}

  @Query(() => [Careers])
  careers() {
    return this.careersService.find()
  }

  @Mutation(() => Careers)
  addCareer(@Args('inputData') createCareerData: CreateCareerInput) {
    return this.careersService.create(createCareerData)
  }

  @Mutation(() => Careers)
  updateCareer(@Args('inputData') updateCareerData: UpdateCareerInput) {
    return this.careersService.update(updateCareerData)
  }

  @Mutation(() => Careers)
  deleteCareer(@Args('inputData') deleteCareerData: DeleteCareerInput) {
    return this.careersService.delete(deleteCareerData)
  }
}
