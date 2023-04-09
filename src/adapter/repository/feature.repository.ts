import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';

@Injectable()
export abstract class FeatureRepository<
  ElementFeature,
  FeatureDocument
> extends MongooseRepository<ElementFeature, FeatureDocument> {
  constructor(model: Model<FeatureDocument>) {
    super(model);
  }

  async findAll(): Promise<ElementFeature[]> {
    return this.model.find({});
  }

  async insert(
    item: ElementFeature,
    name: string,
    idName: string
  ): Promise<void> {
    this.logger.log(`Saving ${name} "${idName}"...`);
    await this.model.create(item);
    this.logger.log(`${name} "${idName}" saved successfully!`);
  }

  async findFeature(
    search: Partial<FeatureDocument>
  ): Promise<ElementFeature[]> {
    return this.model.find(search);
  }
}
