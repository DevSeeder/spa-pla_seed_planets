import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { LandingSite } from 'src/domain/schema/landing-site.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonLandingSiteSearcher extends PlanetaryNamesSearcher<
  LandingSite,
  any,
  LandingSite
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.landing-site'),
      'LandingSite',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: LandingSite): LandingSite {
    feature.diameter = Number(el.find('.diameterColumn').text());
    feature.origin = el.find('.originColumn').text().replaceAll('"', '');
    return feature;
  }
}
