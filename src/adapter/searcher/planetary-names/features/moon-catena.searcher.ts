import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Catena } from 'src/domain/schema/catena.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonCatenaSearcher extends PlanetaryNamesSearcher<
  Catena,
  any,
  Catena
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.catena'),
      'Catena',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Catena): Catena {
    feature.diameter = Number(el.find('.diameterColumn').text());
    return feature;
  }
}
