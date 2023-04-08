import { Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/adapter/repository/feature.repository';
import { PlanetaryNamesSearcher } from 'src/adapter/searcher/crater/planetary-names.searcher';
import { Feature } from 'src/domain/schema/feature.schema';

@Injectable()
export abstract class SeedFeatureService<
  ElementFeature extends Feature,
  DocumentFeature
> {
  constructor(
    private readonly searcher: PlanetaryNamesSearcher<
      ElementFeature,
      any,
      ElementFeature
    >,
    private readonly repository: FeatureRepository<
      ElementFeature,
      DocumentFeature
    >,
    private readonly elementName: string
  ) {}

  async seed(): Promise<any> {
    const features = await this.searcher.getElements();
    for await (const feature of features)
      await this.repository.insert(feature, this.elementName);
    return features;
  }
}
