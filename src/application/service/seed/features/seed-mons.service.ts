import { Injectable } from '@nestjs/common';
import { MonsRepository } from 'src/adapter/repository/features/mons.repository';
import { Mons, MonsDocument } from 'src/domain/schema/mons.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonMonsSearcher } from 'src/adapter/searcher/planetary-names/features/moon-mons.searcher';
import { MonsHeightSearcher } from 'src/adapter/searcher/wikiwand/mons-height-searcher.searcher';
import { MoonHeightSearcherDto } from 'src/application/dto/searcher/moon-height-searcher.dto';

@Injectable()
export class SeedMonsService extends SeedFeatureService<
  Mons,
  MonsDocument,
  MonsRepository
> {
  constructor(
    private readonly featureSearcher: MoonMonsSearcher,
    private readonly heightSearcher: MonsHeightSearcher,
    private readonly featureRepository: MonsRepository
  ) {
    super(featureSearcher, featureRepository, 'Mons');
  }

  async findMoreInfo(feature: Mons): Promise<Mons> {
    this.logger.log(`Searching height for Mons "${feature.name}"`);

    const info = (await this.heightSearcher.getElements({
      name: feature.name
    })) as MoonHeightSearcherDto;

    feature.height = info.height;

    if (isNaN(feature.diameter) && !isNaN(info.diameter) && info.diameter > 0) {
      feature.diameter = info.diameter;
      info.externalRef.fields.push('diameter');
    }

    if (feature.name.startsWith('Montes')) {
      feature.featureType = 'Montes';
    }

    if (info.externalRef.fields.length > 0)
      feature.externalRef.push(info.externalRef);

    this.logger.log(`"${feature.name}" - Height: ${info.height}`);
    this.logger.log(`"${feature.name}" - Diameter: ${info.diameter}`);

    return feature;
  }
}
