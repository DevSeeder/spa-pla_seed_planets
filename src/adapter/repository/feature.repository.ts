import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';
import { Crater } from 'src/domain/schema/crater.schema';
import { Feature } from 'src/domain/schema/feature.schema';

@Injectable()
export abstract class FeatureRepository<
  ElementFeature extends Feature,
  FeatureDocument
> extends MongooseRepository<ElementFeature, FeatureDocument> {
  constructor(model: Model<FeatureDocument>) {
    super(model);
  }

  async findAll(): Promise<Crater[]> {
    return this.model.find({});
  }

  async insert(item: ElementFeature, name: string): Promise<void> {
    this.logger.log(`Saving ${name} "${item.name}"...`);
    await this.model.create(item);
    this.logger.log(`${name} "${item.name}" saved successfully!`);
  }
}
