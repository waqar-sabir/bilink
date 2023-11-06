import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonModel, PersonDocument } from './models/personModel';

@Injectable()
export class PersonsService {

  constructor(@InjectModel(PersonModel.name) private perModel: Model<PersonDocument>) { }

  async create(entityData: any): Promise<PersonModel> {
    const person = new this.perModel(entityData);
    return person.save();
  }

  findAll() {
    return this.perModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
