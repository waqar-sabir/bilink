import { Field, InputType, PickType } from '@nestjs/graphql'
import { RelationshipAPI } from 'defs';
import { WithMetadataInput } from '../../metadata/dto/withMetadataInput'

@InputType()
export class RelationshipInput
  extends PickType(WithMetadataInput, ['metadata'] as const)
  implements RelationshipAPI
{
  relatedPersons: { _id: string; }[];
  person: { _id: string; };
  @Field()
  readonly description: string

  @Field()
  readonly type: string

  @Field()
  readonly proximity: number

  @Field({ nullable: true, defaultValue: true })
  readonly _confirmed: boolean
}
