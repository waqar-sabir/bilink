import { Field, ObjectType, PickType } from '@nestjs/graphql'
import { PersonListRecord } from './personListRecord'

@ObjectType()
export class PersonsSuggestions {
  @Field(() => [PersonListRecord])
  records: PersonListRecord[]
}
