import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catena, CatenaDocument } from 'src/domain/schema/catena.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class CatenaRepository extends FeatureRepository<
  Catena,
  CatenaDocument
> {
  constructor(
    @InjectModel(Catena.name)
    model: Model<CatenaDocument>
  ) {
    super(model);
  }
}
