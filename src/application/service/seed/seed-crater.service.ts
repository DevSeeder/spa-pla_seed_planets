import { Injectable } from '@nestjs/common';
import { CraterRepository } from 'src/adapter/repository/crater.repository';
import { MoonCraterSearcher } from 'src/adapter/searcher/crater/moon-crater.searcher';
import { Crater, CraterDocument } from 'src/domain/schema/crater.schema';
import { SeedFeatureService } from './seed-feature.service';

@Injectable()
export class SeedCraterService extends SeedFeatureService<
  Crater,
  CraterDocument
> {
  constructor(
    private readonly moonCraterSearcher: MoonCraterSearcher,
    private readonly craterRepository: CraterRepository
  ) {
    super(moonCraterSearcher, craterRepository, 'Crater');
  }
}
