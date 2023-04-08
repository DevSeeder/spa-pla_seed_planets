import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crater, CraterDocument } from 'src/domain/schema/crater.schema';
import { FeatureRepository } from './feature.repository';

@Injectable()
export class CraterRepository extends FeatureRepository<
  Crater,
  CraterDocument
> {
  constructor(
    @InjectModel(Crater.name)
    model: Model<CraterDocument>
  ) {
    super(model);
  }
}
