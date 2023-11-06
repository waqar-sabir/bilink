import { Field, ObjectType, PickType } from '@nestjs/graphql'
import { RelationshipAPI } from 'defs'
import { WithMetadata } from '../../metadata/dto/withMetadata'

@ObjectType()
export class Relationship
  extends PickType(WithMetadata, ['metadata'] as const)
  implements RelationshipAPI
{
  relatedPersons: { _id: string }[]
  person: { _id: string }
  @Field({ defaultValue: '' })
  description: string

  @Field()
  type: string

  @Field()
  proximity: number
}
