import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rima, RimaDocument } from 'src/domain/schema/rima.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class RimaRepository extends FeatureRepository<Rima, RimaDocument> {
  constructor(
    @InjectModel(Rima.name)
    model: Model<RimaDocument>
  ) {
    super(model);
  }
}
