import { Logger, NotFoundException } from '@nestjs/common';
import { CheerioAPI } from 'cheerio';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { AbstractPuppeteerSearcher } from './puppeteer.searcher';

export abstract class PuppeteerFeatureSearcher<
  ElementFeature,
  SearchElement,
  ValidOutputSearch
> extends AbstractPuppeteerSearcher {
  protected readonly logger: Logger;

  constructor(
    protected url: string,
    protected puppeteerService: PuppeteerService,
    protected readonly elementName: string
  ) {
    super(puppeteerService);
  }

  async getElements(
    searchParams?: SearchElement,
    convertedSearch?: ValidOutputSearch
  ): Promise<ElementFeature[] | ElementFeature> {
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

  validateOutput(output: ElementFeature[] | ElementFeature): void {
    if (Array.isArray(output) && output.length === 0)
      throw new NotFoundException(this.elementName);
  }

  abstract buildElementsFromDocument(
    _searchParams: SearchElement,
    convertedSearch: ValidOutputSearch,
    _$: CheerioAPI
  ): Promise<ElementFeature[] | ElementFeature>;

  async callEndpoint(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _searchParams?: SearchElement,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _convertedSearch?: ValidOutputSearch
  ): Promise<CheerioAPI> {
    return this.getDocumentHtml(this.url);
  }
}
