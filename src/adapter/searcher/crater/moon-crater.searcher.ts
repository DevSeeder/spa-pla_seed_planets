import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI } from 'cheerio';
import { PuppeteerService } from 'src/application/service/crater/puppeteer.service';
import { PuppeteerFeatureSearcher } from 'src/domain/searcher/puppeteer-feature.searcher';

@Injectable()
export class MoonCraterSearcher extends PuppeteerFeatureSearcher<
  any,
  any,
  any
> {
  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('repository.neighborhoods.guia-mais.url'),
      puppeteerService,
      'Neighborhoods'
    );
  }

  async buildElementsFromDocument(
    searchParams: any,
    convertedSearch: any,
    $: CheerioAPI
  ): Promise<any[]> {
    const arrNeighborhoods = [];
    // $('.cities.centerContent')
    //   .find('a')
    //   .each(function () {
    //     const neighborhood = new NeighborhoodByCity();

    //     neighborhood.name = $(this).text();
    //     neighborhood.cityId = convertedSearch.city.id;
    //     neighborhood.city = `${searchParams.city.capitalize()} - ${searchParams.state.toUpperCase()}`;
    //     neighborhood.stateId = convertedSearch.state.id;
    //     neighborhood.countryId = convertedSearch.country.id;

    //     arrNeighborhoods.push(neighborhood);
    //   });

    return arrNeighborhoods;
  }

  async callEndpoint(searchParams: any): Promise<CheerioAPI> {
    const city = searchParams.city.trim().replaceAll(' ', '-');
    const url = `${this.url}/${city}-${searchParams.state}`;
    return this.getDocumentHtml(url);
  }
}
