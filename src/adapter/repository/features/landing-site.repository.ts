import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LandingSite,
  LandingSiteDocument
} from 'src/domain/schema/landing-site.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class LandingSiteRepository extends FeatureRepository<
  LandingSite,
  LandingSiteDocument
> {
  constructor(
    @InjectModel(LandingSite.name)
    model: Model<LandingSiteDocument>
  ) {
    super(model);
  }
}
