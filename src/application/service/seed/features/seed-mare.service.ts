import { Injectable } from '@nestjs/common';
import { MareRepository } from 'src/adapter/repository/features/mare.repository';
import { Mare, MareDocument } from 'src/domain/schema/mare.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonMareSearcher } from 'src/adapter/searcher/planetary-names/features/moon-mare.searcher';

@Injectable()
export class SeedMareService extends SeedFeatureService<
  Mare,
  MareDocument,
  MareRepository
> {
  constructor(
    private readonly moonMareSearcher: MoonMareSearcher,
    private readonly featureRepository: MareRepository
  ) {
    super(moonMareSearcher, featureRepository, 'Mare');
  }
}
