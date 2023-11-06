import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Education } from 'defs'
import { SchemaTypes, Types } from 'mongoose'
import { MetadataModel, MetadataSchema } from '../../metadata/models/metadataModel'

@Schema({ _id: true, timestamps: false })
export class EducationModel implements Education {
  @Prop({ type: MetadataSchema })
  metadata: MetadataModel

  @Prop()
  type: string

  @Prop()
  school: string

  @Prop()
  specialization: string

  @Prop({ type: SchemaTypes.Date, default: true })
  startDate: Date | string | null

  @Prop({ type: SchemaTypes.Date, default: true })
  endDate: Date | string | null
}

export const EducationSchema = SchemaFactory.createForClass(EducationModel)
