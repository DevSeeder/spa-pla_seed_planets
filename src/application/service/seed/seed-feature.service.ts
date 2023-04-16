import { Injectable, Logger } from '@nestjs/common';
import { FeatureRepository } from 'src/adapter/repository/feature.repository';
import { PlanetaryNamesSearcher } from 'src/adapter/searcher/planetary-names/planetary-names.searcher';
import { Feature } from 'src/domain/schema/feature.schema';

@Injectable()
export abstract class SeedFeatureService<
  ElementFeature extends Feature,
  DocumentFeature,
  Repository extends FeatureRepository<ElementFeature, DocumentFeature>
> {
  protected readonly logger: Logger = new Logger(SeedFeatureService.name);

  constructor(
    private readonly searcher: PlanetaryNamesSearcher<
      ElementFeature,
      any,
      ElementFeature
    >,
    private readonly repository: Repository,
    private readonly elementName: string
  ) {}

  async seed(featureType = true): Promise<any> {
    const features = await this.searcher.getElements();
    for await (let feature of features as ElementFeature[]) {
      feature.name = feature.name.replace('[', '').replace(']', '');
      const objFilter = { name: feature.name };

      if (featureType) objFilter['featureType'] = this.elementName;

      const featureFound = await this.repository.find(objFilter);

      if (featureFound.length > 0) {
        this.logger.warn(
          `${this.elementName} "${feature.name}" already found in database...`
        );
        continue;
      }

      feature = await this.findMoreInfo(feature);
      await this.save(feature);
    }
    return features;
  }

  async save(feature: ElementFeature): Promise<void> {
    await this.repository.insert(feature, this.elementName, feature.name);
  }

  async findMoreInfo(feature: ElementFeature): Promise<ElementFeature> {
    return feature;
  }
}
