import { Injectable } from '@nestjs/common';
import { SeedFeatureService } from '../seed-feature.service';
import { Crater, CraterDocument } from 'src/domain/schema/crater.schema';
import { CraterRepository } from 'src/adapter/repository/features/crater.repository';
import { MoonSatSearcher } from 'src/adapter/searcher/planetary-names/features/moon-sat.searcher';
import { Mons } from 'src/domain/schema/mons.schema';
import { Rupes } from 'src/domain/schema/rupes.schema';
import { Rima } from 'src/domain/schema/rima.schema';
import { Vallis } from 'src/domain/schema/vallis.schema';
import { Promontorium } from 'src/domain/schema/promontorium.schema';

@Injectable()
export class SeedSatService extends SeedFeatureService<
  any,
  CraterDocument,
  CraterRepository
> {
  constructor(
    private readonly featureSearcher: MoonSatSearcher,
    private readonly featureRepository: CraterRepository
  ) {
    super(featureSearcher, featureRepository, 'Crater');
  }

  async seed(featureType?: boolean): Promise<any> {
    return super.seed(false);
  }

  async findMoreInfo(feature: any): Promise<any> {
    this.logger.log(`Searching parent for "${feature.name}"`);

    const parentName = this.getParentName(feature.name, feature.refParent);
    this.logger.log(`Parent name: ${parentName}`);
    const parent = await this.featureRepository.find({
      $or: [
        {
          name: parentName
        },
        {
          alias: parentName
        }
      ]
    });

    if (parent.length === 0)
      throw new Error(`Not found parent crater for "${feature.name}"`);

    this.logger.log(`featureType: ${parent[0].featureType}`);

    switch (parent[0].featureType) {
      case 'Crater':
        feature = feature as Crater;
        feature.idMainCrater = parent[0]._id;
        break;
      case 'Montes':
      case 'Mons':
        feature = feature as Mons;
        feature.idMainMons = parent[0]._id;
        break;
      case 'Rupes':
        feature = feature as Rupes;
        feature.idMainRupes = parent[0]._id;
        break;
      case 'Rima':
        feature = feature as Rima;
        feature.idMainRima = parent[0]._id;
        break;
      case 'Vallis':
        feature = feature as Vallis;
        feature.idMainVallis = parent[0]._id;
        break;
      case 'Promontorium':
        feature = feature as Promontorium;
        feature.idMainPromontorium = parent[0]._id;
        break;
      default:
        throw new Error(
          `Type ${parent[0].featureType} not supported for "${feature.name}"`
        );
    }

    feature.idParent = parent[0].idParent;
    feature.featureType = parent[0].featureType;
    feature.additionalInfo.push('Satellite');

    return feature;
  }

  private getParentName(name: string, origin: string): string {
    const nameReplace = name.replace(' Inner', '').replace(' Outer', '');

    const arrName = nameReplace.split(' ');
    arrName[arrName.length - 1] = '#';

    const parentName = arrName
      .join(' ')
      .replace(' #', '')
      .replace('#', '')
      .replace(' Inner', '')
      .replace(' Outer', '');

    if (origin.startsWith('Named for nearby mountain ('))
      return origin
        .replace('Named for nearby mountain (', '')
        .replace(').', '');

    if (origin.startsWith('Named for '))
      return origin.replace('Named for ', '').replace('.', '');

    if (origin.startsWith('Named after '))
      return origin.replace('Named after ', '').replace('.', '');

    return parentName;
  }
}
