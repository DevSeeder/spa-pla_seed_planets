import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';
import { Feature } from 'src/domain/schema/feature.schema';
import { MoonCraterSearcher } from './moon-crater.searcher';
import { CheerioAPI } from 'cheerio';

@Injectable()
export class MoonSatSearcher extends PlanetaryNamesSearcher<
  Feature,
  any,
  Feature
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService,
    protected craterMoonSearcher: MoonCraterSearcher
  ) {
    super(
      configService.get<string>('searcher.moon.url.sat'),
      'Sat',
      configService,
      puppeteerService
    );
  }

  async fillFeature(el, sat: Feature): Promise<Feature & any> {
    const diameter = Number(el.find('.diameterColumn').text());
    const origin = el.find('.originColumn').text().replaceAll('"', '');

    return { ...sat, diameter, refParent: origin };
  }
}
