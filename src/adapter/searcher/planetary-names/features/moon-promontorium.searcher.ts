import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Promontorium } from 'src/domain/schema/promontorium.schema';
import { PlanetaryNamesSearcher } from '../planetary-names.searcher';

@Injectable()
export class MoonPromontoriumSearcher extends PlanetaryNamesSearcher<
  Promontorium,
  any,
  Promontorium
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.promontorium'),
      'Promontorium',
      configService,
      puppeteerService
    );
  }

  fillFeature(el, feature: Promontorium): Promontorium {
    feature.diameter = Number(el.find('.diameterColumn').text());
    return feature;
  }
}
