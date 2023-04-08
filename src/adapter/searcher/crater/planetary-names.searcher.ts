/* eslint-disable @typescript-eslint/no-this-alias */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI } from 'cheerio';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Feature } from 'src/domain/schema/feature.schema';
import { PuppeteerFeatureSearcher } from 'src/domain/searcher/puppeteer-feature.searcher';

@Injectable()
export abstract class PlanetaryNamesSearcher<
  ElementFeature,
  SearchElement,
  ValidOutputSearch
> extends PuppeteerFeatureSearcher<
  ElementFeature,
  SearchElement,
  ValidOutputSearch
> {
  private readonly source: string = 'planetarynames';

  constructor(
    protected url: string,
    protected elementName: string,
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(url, puppeteerService, elementName);
  }

  async buildElementsFromDocument(
    _searchParams: any,
    _convertedSearch: any,
    $: CheerioAPI
  ): Promise<any[]> {
    const context = this;
    const arr = [];
    const cfgService = this.configService;

    const raws = $('#results_body').find('tr.hover-highlight');

    this.logger.log(`Total found: ${raws.length}`);

    raws.each(function () {
      const feature = new Feature();
      feature.wikiId = cfgService.get<string>('searcher.moon.wikiId');
      feature.wikiTable = cfgService.get<string>('searcher.moon.wikiTable');
      feature.refName = cfgService.get<string>('searcher.moon.refName');
      feature.refType = cfgService.get<string>('searcher.moon.refType');
      feature.featureType = context.elementName;
      feature.name = $(this).find('.cleanFeatureNameColumn').text();
      feature.coordinates = {
        lat: Number(
          $(this)
            .find('.centerLatLonColumn')
            .eq(0)
            .text()
            .replaceAll(' ', '')
            .replaceAll('\n', '')
        ),
        long: Number(
          $(this)
            .find('.centerLatLonColumn')
            .eq(1)
            .text()
            .replaceAll(' ', '')
            .replaceAll('\n', '')
        )
      };
      feature.quad = $(this)
        .find('.quadColumn')
        .text()
        .replaceAll(' ', '')
        .replaceAll('\n', '');
      const addInfo = $(this).find('.additionalInfoColumn').text();
      feature.additionalInfo = addInfo.length > 0 ? [addInfo] : [];
      feature.externalIds = [
        {
          id: $(this).find('.featureIDColumn').text(),
          source: context.source
        }
      ];
      feature.alias = [feature.name];
      feature.idRegion = null;
      feature.idParent = null;
      context.logger.log(
        `${context.elementName} "${feature.name}" [${feature.externalIds[0].id}]`
      );
      arr.push(context.fillFeature($(this), feature));
    });

    return arr;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async callEndpoint(_searchParams: any): Promise<CheerioAPI> {
    return this.getDocumentHtml(this.url);
  }

  abstract fillFeature(el, feature: Feature): ElementFeature;
}
