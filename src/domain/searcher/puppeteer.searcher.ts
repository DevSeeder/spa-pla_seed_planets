import { Logger } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { CheerioAPI } from 'cheerio';
import { Page } from 'puppeteer';
import { PuppeteerService } from 'src/application/service/crater/puppeteer.service';

export abstract class AbstractPuppeteerSearcher {
  protected readonly logger: Logger = new Logger(this.constructor.name);

  protected page: Page;

  constructor(protected readonly puppeteerService: PuppeteerService) {}

  async getDocumentHtml(url: string): Promise<CheerioAPI> {
    const data = await this.puppeteerService.tryCollectData(url);
    return cheerio.load(data);
  }

  validateInput(searchParams) {
    searchParams.validateIsAnyEmptyKey();
  }
}
