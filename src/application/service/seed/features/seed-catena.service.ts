import { Injectable } from '@nestjs/common';
import { CatenaRepository } from 'src/adapter/repository/features/catena.repository';
import { Catena, CatenaDocument } from 'src/domain/schema/catena.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonCatenaSearcher } from 'src/adapter/searcher/planetary-names/features/moon-catena.searcher';

@Injectable()
export class SeedCatenaService extends SeedFeatureService<
  Catena,
  CatenaDocument,
  CatenaRepository
> {
  constructor(
    private readonly featureSearcher: MoonCatenaSearcher,
    private readonly featureRepository: CatenaRepository
  ) {
    super(featureSearcher, featureRepository, 'Catena');
  }
}
