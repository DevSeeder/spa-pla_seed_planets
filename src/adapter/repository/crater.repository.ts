import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';
import { Crater, CraterDocument } from 'src/domain/schema/crater.schema';

@Injectable()
export class CraterRepository extends MongooseRepository<
  Crater,
  CraterDocument
> {
  constructor(
    @InjectModel(Crater.name)
    model: Model<CraterDocument>
  ) {
    super(model);
  }

  async findAll(): Promise<Crater[]> {
    return this.model.find({});
  }
}
