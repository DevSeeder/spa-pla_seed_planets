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
    let saveFeature = { ...feature };
    this.logger.log(`Searching parent for "${feature.name}"`);

    const parentName = this.getParentName(feature.name, feature.refParent);
    this.logger.log(`Parent name: ${parentName}`);
    const parent = await this.featureRepository.find(
      {
        $or: [
          {
            name: parentName
          },
          {
            alias: parentName
          }
        ]
      },
      {
        _id: 1,
        name: 1,
        featureType: 1
      }
    );

    console.log(parent);

    if (parent.length === 0)
      throw new Error(`Not found parent crater for "${feature.name}"`);

    this.logger.log(`featureType: ${parent[0].featureType}`);

    const idParent = parent[0]._id.toString();

    switch (parent[0].featureType) {
      case 'Crater':
        saveFeature = saveFeature as Crater;
        saveFeature.idMainCrater = idParent;
        break;
      case 'Montes':
      case 'Mons':
        saveFeature = saveFeature as Mons;
        saveFeature.idMainMons = idParent;
        break;
      case 'Rupes':
        saveFeature = saveFeature as Rupes;
        saveFeature.idMainRupes = idParent;
        break;
      case 'Rima':
        saveFeature = saveFeature as Rima;
        saveFeature.idMainRima = idParent;
        break;
      case 'Vallis':
        saveFeature = saveFeature as Vallis;
        saveFeature.idMainVallis = idParent;
        break;
      case 'Promontorium':
        saveFeature = saveFeature as Promontorium;
        saveFeature.idMainPromontorium = idParent;
        break;
      default:
        throw new Error(
          `Type ${parent[0].featureType} not supported for "${feature.name}"`
        );
    }

    // saveFeature.idParent = idParent;
    saveFeature.featureType = parent[0].featureType;
    saveFeature.additionalInfo.push('Satellite');

    console.log(saveFeature);

    return saveFeature;
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
