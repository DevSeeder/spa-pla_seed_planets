import { Injectable } from '@nestjs/common';
import { FeatureRepository } from 'src/adapter/repository/feature.repository';
import { Feature, FeatureDocument } from 'src/domain/schema/feature.schema';

@Injectable()
export class LinkFeatureRegionService {
  constructor(
    private readonly repository: FeatureRepository<Feature, FeatureDocument>
  ) {}

  async linkFeatureRegion(): Promise<void> {
    return;
  }
}
