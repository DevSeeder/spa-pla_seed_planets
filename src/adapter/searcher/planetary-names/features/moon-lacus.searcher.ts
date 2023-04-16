import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Lacus } from 'src/domain/schema/lacus.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonLacusSearcher extends PlanetaryNamesSearcher<
  Lacus,
  any,
  Lacus
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.lacus'),
      'Lacus',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Lacus): Lacus {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.origin = el.find('.originColumn').text().replaceAll('"', '');
    return feature;
  }
}
