import { Injectable } from '@nestjs/common';
import { VallisRepository } from 'src/adapter/repository/features/vallis.repository';
import { Vallis, VallisDocument } from 'src/domain/schema/vallis.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonVallisSearcher } from 'src/adapter/searcher/planetary-names/features/moon-vallis.searcher';

@Injectable()
export class SeedVallisService extends SeedFeatureService<
  Vallis,
  VallisDocument,
  VallisRepository
> {
  constructor(
    private readonly moonVallisSearcher: MoonVallisSearcher,
    private readonly featureRepository: VallisRepository
  ) {
    super(moonVallisSearcher, featureRepository, 'Vallis');
  }
}
