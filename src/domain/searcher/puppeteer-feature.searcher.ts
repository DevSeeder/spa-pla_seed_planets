import { NotFoundException } from '@nestjs/common';
import { CheerioAPI } from 'cheerio';
import { PuppeteerService } from 'src/application/service/crater/puppeteer.service';
import { AbstractPuppeteerSearcher } from './puppeteer.searcher';

export abstract class PuppeteerFeatureSearcher<
  ElementPlace,
  SearchElement,
  ValidOutputSearch
> extends AbstractPuppeteerSearcher {
  constructor(
    protected url: string,
    protected puppeteerService: PuppeteerService,
    protected readonly elementName: string
  ) {
    super(puppeteerService);
  }

  async getElements(
    searchParams: SearchElement,
    convertedSearch: ValidOutputSearch
  ): Promise<ElementPlace[]> {
    this.validateInput(searchParams);

    const $ = await this.callEndpoint(searchParams, convertedSearch);
    const elements = await this.buildElementsFromDocument(
      searchParams,
      convertedSearch,
      $
    );

    this.validateOutput(elements);

    return elements;
  }

  validateOutput(output: ElementPlace[]): void {
    if (output.length === 0) throw new NotFoundException(this.elementName);
  }

  abstract buildElementsFromDocument(
    _searchParams: SearchElement,
    convertedSearch: ValidOutputSearch,
    _$: CheerioAPI
  ): Promise<ElementPlace[]>;

  abstract callEndpoint(
    _searchParams: SearchElement,
    _convertedSearch?: ValidOutputSearch
  ): Promise<CheerioAPI>;
}
