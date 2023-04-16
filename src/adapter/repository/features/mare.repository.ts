import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mare, MareDocument } from 'src/domain/schema/mare.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class MareRepository extends FeatureRepository<Mare, MareDocument> {
  constructor(
    @InjectModel(Mare.name)
    model: Model<MareDocument>
  ) {
    super(model);
  }
}
