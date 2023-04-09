import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Sinus } from 'src/domain/schema/sinus.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonSinusSearcher extends PlanetaryNamesSearcher<
  Sinus,
  any,
  Sinus
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.sinus'),
      'Sinus',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Sinus): Sinus {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.origin = el.find('.originColumn').text().replaceAll('"', '');
    return feature;
  }
}
