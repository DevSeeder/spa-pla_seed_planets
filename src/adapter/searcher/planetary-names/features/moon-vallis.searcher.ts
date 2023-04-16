import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Vallis } from 'src/domain/schema/vallis.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonVallisSearcher extends PlanetaryNamesSearcher<
  Vallis,
  any,
  Vallis
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.vallis'),
      'Vallis',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Vallis): Vallis {
    feature.diameter = Number(el.find('.diameterColumn').text());
    return feature;
  }
}
