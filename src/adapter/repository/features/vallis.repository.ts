import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vallis, VallisDocument } from 'src/domain/schema/vallis.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class VallisRepository extends FeatureRepository<
  Vallis,
  VallisDocument
> {
  constructor(
    @InjectModel(Vallis.name)
    model: Model<VallisDocument>
  ) {
    super(model);
  }
}
