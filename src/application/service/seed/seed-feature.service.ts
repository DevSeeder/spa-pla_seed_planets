import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';
import { Injectable } from '@nestjs/common';
import { PlanetaryNamesSearcher } from 'src/adapter/searcher/crater/planetary-names.searcher';

@Injectable()
export abstract class SeedFeatureService<ElementFeature, DocumentFeature> {
  constructor(
    private readonly searcher: PlanetaryNamesSearcher<
      ElementFeature,
      any,
      ElementFeature
    >,
    private readonly repository: MongooseRepository<
      ElementFeature,
      DocumentFeature
    >,
    private readonly elementName: string
  ) {}

  async seed(): Promise<any> {
    const features = await this.searcher.getElements();
    for await (const feature of features)
      await this.repository.insertOne(feature, this.elementName);
    return features;
  }
}
