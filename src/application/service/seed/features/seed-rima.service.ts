import { Injectable } from '@nestjs/common';
import { RimaRepository } from 'src/adapter/repository/features/rima.repository';
import { Rima, RimaDocument } from 'src/domain/schema/rima.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonRimaSearcher } from 'src/adapter/searcher/planetary-names/features/moon-rima.searcher';

@Injectable()
export class SeedRimaService extends SeedFeatureService<
  Rima,
  RimaDocument,
  RimaRepository
> {
  constructor(
    private readonly moonRimaSearcher: MoonRimaSearcher,
    private readonly rimaRepository: RimaRepository
  ) {
    super(moonRimaSearcher, rimaRepository, 'Rima');
  }
}
