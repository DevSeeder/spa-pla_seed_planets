import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Rima } from 'src/domain/schema/rima.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonRimaSearcher extends PlanetaryNamesSearcher<Rima, any, Rima> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.rima'),
      'Rima',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Rima): Rima {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.idMainRima = null;
    return feature;
  }
}
