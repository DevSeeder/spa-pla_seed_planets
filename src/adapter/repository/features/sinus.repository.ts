import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sinus, SinusDocument } from 'src/domain/schema/sinus.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class SinusRepository extends FeatureRepository<Sinus, SinusDocument> {
  constructor(
    @InjectModel(Sinus.name)
    model: Model<SinusDocument>
  ) {
    super(model);
  }
}
