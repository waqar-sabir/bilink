import { Resolver,ArgsType,Field, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonsService } from './persons.service';
import { Person } from './dto/person';
import { PersonInput } from './dto/personInput';

@ArgsType()
class Params {
  @Field(() => PersonInput)
  data:  PersonInput
}

@Resolver(() => Person)
export class PersonsResolver {
  constructor(private readonly personsService: PersonsService) {}

  @Mutation(() => Person)
  createPerson(@Args() { data }: Params) {
    return this.personsService.create(data);
  }

  @Query(() => [Person], { name: 'persons' })
  findAll() {
    return this.personsService.findAll();
  }

  @Query(() => Person, { name: 'person' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.personsService.findOne(id);
  }

  @Mutation(() => Person)
  removePerson(@Args('id', { type: () => Int }) id: number) {
    return this.personsService.remove(id);
  }
}
