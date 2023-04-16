import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Mare } from 'src/domain/schema/mare.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonMareSearcher extends PlanetaryNamesSearcher<Mare, any, Mare> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.mare'),
      'Mare',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Mare): Mare {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.origin = el.find('.originColumn').text().replaceAll('"', '');
    return feature;
  }
}
