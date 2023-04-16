import { Injectable } from '@nestjs/common';
import { LacusRepository } from 'src/adapter/repository/features/lacus.repository';
import { Lacus, LacusDocument } from 'src/domain/schema/lacus.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonLacusSearcher } from 'src/adapter/searcher/planetary-names/features/moon-lacus.searcher';

@Injectable()
export class SeedLacusService extends SeedFeatureService<
  Lacus,
  LacusDocument,
  LacusRepository
> {
  constructor(
    private readonly moonLacusSearcher: MoonLacusSearcher,
    private readonly featureRepository: LacusRepository
  ) {
    super(moonLacusSearcher, featureRepository, 'Lacus');
  }
}
