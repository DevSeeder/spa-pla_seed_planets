import { Injectable } from '@nestjs/common';
import { RupesRepository } from 'src/adapter/repository/features/rupes.repository';
import { Rupes, RupesDocument } from 'src/domain/schema/rupes.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonRupesSearcher } from 'src/adapter/searcher/planetary-names/features/moon-rupes.searcher';

@Injectable()
export class SeedRupesService extends SeedFeatureService<
  Rupes,
  RupesDocument,
  RupesRepository
> {
  constructor(
    private readonly moonRupesSearcher: MoonRupesSearcher,
    private readonly featureRepository: RupesRepository
  ) {
    super(moonRupesSearcher, featureRepository, 'Rupes');
  }
}
