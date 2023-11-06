import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsResolver } from './persons.resolver';
import { MongooseModule } from "@nestjs/mongoose";
import { PersonModel, PersonSchema } from './models/personModel';

@Module({
  providers: [PersonsResolver, PersonsService],
  imports: [MongooseModule.forFeature([
    {
        name: PersonModel.name,
        schema: PersonSchema,
    },
  ])],
})
export class PersonsModule {}
