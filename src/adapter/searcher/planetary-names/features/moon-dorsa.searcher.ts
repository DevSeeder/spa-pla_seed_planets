import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Dorsa } from 'src/domain/schema/dorsa.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonDorsaSearcher extends PlanetaryNamesSearcher<
  Dorsa,
  any,
  Dorsa
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.dorsa'),
      'Dorsa',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Dorsa): Dorsa {
    feature.diameter = Number(el.find('.diameterColumn').text());
    return feature;
  }
}
