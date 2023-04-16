import { Injectable, NotFoundException } from '@nestjs/common';
import { FeatureRepository } from 'src/adapter/repository/feature.repository';
import { LinkParentFeatureDto } from 'src/application/dto/feature/link-parent-feature.dto';
import { Feature, FeatureDocument } from 'src/domain/schema/feature.schema';

@Injectable()
export class LinkParentFeatureService {
  constructor(
    private readonly repository: FeatureRepository<Feature, FeatureDocument>
  ) {}

  async linkParentFeature(linkDto: LinkParentFeatureDto): Promise<void> {
    const feature = await this.repository.find(
      {
        refName: linkDto.refName,
        refType: linkDto.refType,
        featureType: linkDto.featureType,
        name: linkDto.name
      },
      {
        _id: 1,
        name: 1
      }
    );

    if (feature.length === 0) {
      throw new NotFoundException('Feature not found');
    }

    const parent = await this.repository.find(
      {
        refName: linkDto.refName,
        refType: linkDto.refType,
        featureType: linkDto.parentType,
        name: linkDto.parent
      },
      {
        _id: 1,
        name: 1
      }
    );

    if (parent.length === 0) {
      throw new NotFoundException('Parent not found');
    }

    await this.repository.updateOneById(feature[0]._id, {
      idParent: parent[0]._id.toString()
    });
  }
}
