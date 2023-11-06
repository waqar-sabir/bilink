import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { PersonModel, PersonSchema } from './personModel'

@Schema({ _id: true, timestamps: true })
export class PersonHistorySnapshotModel {
  _id: string

  @Prop()
  entityId: string

  @Prop({ type: PersonSchema })
  entityInfo: PersonModel

  @Prop()
  createdAt?: Date

  @Prop()
  updatedAt?: Date
}

export type PersonHistorySnapshotDocument = Document & PersonHistorySnapshotModel
export const PersonHistorySnapshotSchema = SchemaFactory.createForClass(PersonHistorySnapshotModel)
