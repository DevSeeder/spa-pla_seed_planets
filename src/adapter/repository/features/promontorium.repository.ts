import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Promontorium,
  PromontoriumDocument
} from 'src/domain/schema/promontorium.schema';
import { FeatureRepository } from '../feature.repository';

@Injectable()
export class PromontoriumRepository extends FeatureRepository<
  Promontorium,
  PromontoriumDocument
> {
  constructor(
    @InjectModel(Promontorium.name)
    model: Model<PromontoriumDocument>
  ) {
    super(model);
  }
}
