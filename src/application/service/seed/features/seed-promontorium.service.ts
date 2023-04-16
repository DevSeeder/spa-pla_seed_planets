import { Injectable } from '@nestjs/common';
import { PromontoriumRepository } from 'src/adapter/repository/features/promontorium.repository';
import {
  Promontorium,
  PromontoriumDocument
} from 'src/domain/schema/promontorium.schema';
import { SeedFeatureService } from '../seed-feature.service';
import { MoonPromontoriumSearcher } from 'src/adapter/searcher/planetary-names/features/moon-promontorium.searcher';

@Injectable()
export class SeedPromontoriumService extends SeedFeatureService<
  Promontorium,
  PromontoriumDocument,
  PromontoriumRepository
> {
  constructor(
    private readonly moonPromontoriumSearcher: MoonPromontoriumSearcher,
    private readonly featureRepository: PromontoriumRepository
  ) {
    super(moonPromontoriumSearcher, featureRepository, 'Promontorium');
  }
}
