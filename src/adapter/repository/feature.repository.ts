import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  MongooseDocumentID,
  MongooseRepository
} from '@devseeder/nestjs-microservices-commons';
import { Feature } from 'src/domain/schema/feature.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FeatureRepository<
  ElementFeature,
  FeatureDocument
> extends MongooseRepository<ElementFeature, FeatureDocument> {
  constructor(
    @InjectModel(Feature.name)
    model: Model<FeatureDocument>
  ) {
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

  async updateOneById(id: MongooseDocumentID, data: any): Promise<void> {
    await this.model.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: data
      },
      { upsert: false }
    );
  }
}
