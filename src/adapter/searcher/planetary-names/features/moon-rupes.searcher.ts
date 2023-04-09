import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Rupes } from 'src/domain/schema/rupes.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonRupesSearcher extends PlanetaryNamesSearcher<
  Rupes,
  any,
  Rupes
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.rupes'),
      'Rupes',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Rupes): Rupes {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.idMainRupes = null;
    return feature;
  }
}
