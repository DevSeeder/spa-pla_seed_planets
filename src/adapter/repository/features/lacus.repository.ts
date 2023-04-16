import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lacus, LacusDocument } from 'src/domain/schema/lacus.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class LacusRepository extends FeatureRepository<Lacus, LacusDocument> {
  constructor(
    @InjectModel(Lacus.name)
    model: Model<LacusDocument>
  ) {
    super(model);
  }
}
