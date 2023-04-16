import { Injectable } from '@nestjs/common';
import { LandingSiteRepository } from 'src/adapter/repository/features/landing-site.repository';
import {
  LandingSite,
  LandingSiteDocument
} from 'src/domain/schema/landing-site.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonLandingSiteSearcher } from 'src/adapter/searcher/planetary-names/features/moon-landing-site.searcher';

@Injectable()
export class SeedLandingSiteService extends SeedFeatureService<
  LandingSite,
  LandingSiteDocument,
  LandingSiteRepository
> {
  constructor(
    private readonly moonLandingSiteSearcher: MoonLandingSiteSearcher,
    private readonly featureRepository: LandingSiteRepository
  ) {
    super(moonLandingSiteSearcher, featureRepository, 'LandingSite');
  }
}
