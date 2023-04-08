import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI } from 'cheerio';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { Crater } from 'src/domain/schema/crater.schema';
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
    const arr = [];
    const cfgService = this.configService;
    const logger = this.logger;
    const source = this.source;
    const elementName = this.elementName;

    const raws = $('#results_body').find('tr.hover-highlight');

    this.logger.log(`Total found: ${raws}`);

    raws.each(function () {
      const crater = new Crater();
      crater.wikiId = cfgService.get<string>('searcher.moon.wikiId');
      crater.wikiTable = cfgService.get<string>('searcher.moon.wikiTable');
      crater.refName = cfgService.get<string>('searcher.moon.refName');
      crater.refType = cfgService.get<string>('searcher.moon.refType');
      crater.name = $(this).find('.cleanFeatureNameColumn').text();
      crater.coordinates = {
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
      crater.quad = $(this)
        .find('.quadColumn')
        .text()
        .replaceAll(' ', '')
        .replaceAll('\n', '');
      const addInfo = $(this).find('.additionalInfoColumn').text();
      crater.additionalInfo = addInfo.length > 0 ? [addInfo] : [];
      crater.externalIds = [
        {
          id: $(this).find('.featureIDColumn').text(),
          source
        }
      ];
      crater.alias = [crater.name];
      crater.idRegion = null;
      crater.idParent = null;
      logger.log(
        `${elementName} "${crater.name}" [${crater.externalIds[0].id}]`
      );
      arr.push(crater);
    });

    return arr;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async callEndpoint(_searchParams: any): Promise<CheerioAPI> {
    return this.getDocumentHtml(this.url);
  }

  abstract fillFeature(el, crater: ElementFeature): ElementFeature;
}
