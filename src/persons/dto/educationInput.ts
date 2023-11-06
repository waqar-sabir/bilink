import { Field, ID, InputType, PickType } from '@nestjs/graphql'
import { EducationAPIInput } from 'defs'
import { WithMetadataInput } from '../../metadata/dto/withMetadataInput'

@InputType()
export class EducationInput
  extends PickType(WithMetadataInput, ['metadata'] as const)
  implements EducationAPIInput
{
  @Field(() => ID, { nullable: true })
  _id?: string

  @Field()
  type: string

  @Field()
  school: string

  @Field()
  specialization: string

  @Field(() => Date, { nullable: true })
  startDate: Date | null

  @Field(() => Date, { nullable: true })
  endDate: Date | null
}
