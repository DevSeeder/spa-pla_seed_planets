import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dorsa, DorsaDocument } from 'src/domain/schema/dorsa.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class DorsaRepository extends FeatureRepository<Dorsa, DorsaDocument> {
  constructor(
    @InjectModel(Dorsa.name)
    model: Model<DorsaDocument>
  ) {
    super(model);
  }
}
