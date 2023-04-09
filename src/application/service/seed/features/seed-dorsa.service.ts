import { Injectable } from '@nestjs/common';
import { DorsaRepository } from 'src/adapter/repository/features/dorsa.repository';
import { Dorsa, DorsaDocument } from 'src/domain/schema/dorsa.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonDorsaSearcher } from 'src/adapter/searcher/planetary-names/features/moon-dorsa.searcher';

@Injectable()
export class SeedDorsaService extends SeedFeatureService<
  Dorsa,
  DorsaDocument,
  DorsaRepository
> {
  constructor(
    private readonly featureSearcher: MoonDorsaSearcher,
    private readonly featureRepository: DorsaRepository
  ) {
    super(featureSearcher, featureRepository, 'Dorsa');
  }
}
