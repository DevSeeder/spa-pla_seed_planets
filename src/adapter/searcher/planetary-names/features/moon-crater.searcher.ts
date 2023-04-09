import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Crater } from 'src/domain/schema/crater.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonCraterSearcher extends PlanetaryNamesSearcher<
  Crater,
  any,
  Crater
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.crater'),
      'Crater',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, crater: Crater): Crater {
    crater.diameter = Number(el.find('.diameterColumn').text());
    crater.idMainCrater = null;
    return crater;
  }
}
