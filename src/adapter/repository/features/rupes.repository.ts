import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rupes, RupesDocument } from 'src/domain/schema/rupes.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class RupesRepository extends FeatureRepository<Rupes, RupesDocument> {
  constructor(
    @InjectModel(Rupes.name)
    model: Model<RupesDocument>
  ) {
    super(model);
  }
}
