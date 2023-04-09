import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Mons } from 'src/domain/schema/mons.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonMonsSearcher extends PlanetaryNamesSearcher<Mons, any, Mons> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.mons'),
      'Mons',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Mons): Mons {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.height = 0;
    feature.name = el
      .find('.featureNameColumn')
      .text()
      .replaceAll('\n                \n                 \n                ', '')
      .replaceAll(' \n                \n                \n            ', '');
    return feature;
  }
}
