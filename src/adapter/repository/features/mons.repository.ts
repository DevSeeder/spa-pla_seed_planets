import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mons, MonsDocument } from 'src/domain/schema/mons.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class MonsRepository extends FeatureRepository<Mons, MonsDocument> {
  constructor(
    @InjectModel(Mons.name)
    model: Model<MonsDocument>
  ) {
    super(model);
  }
}
