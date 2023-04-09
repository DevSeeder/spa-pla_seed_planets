import { Injectable } from '@nestjs/common';
import { SinusRepository } from 'src/adapter/repository/features/sinus.repository';
import { Sinus, SinusDocument } from 'src/domain/schema/sinus.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonSinusSearcher } from 'src/adapter/searcher/planetary-names/features/moon-sinus.searcher';

@Injectable()
export class SeedSinusService extends SeedFeatureService<
  Sinus,
  SinusDocument,
  SinusRepository
> {
  constructor(
    private readonly moonSinusSearcher: MoonSinusSearcher,
    private readonly featureRepository: SinusRepository
  ) {
    super(moonSinusSearcher, featureRepository, 'Sinus');
  }
}
