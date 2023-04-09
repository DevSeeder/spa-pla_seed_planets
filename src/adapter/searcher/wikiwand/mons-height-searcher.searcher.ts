/* eslint-disable @typescript-eslint/no-this-alias */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI } from 'cheerio';
import { features } from 'process';
import { MoonHeightSearcherDto } from 'src/application/dto/searcher/moon-height-searcher.dto';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';
import { PuppeteerFeatureSearcher } from 'src/domain/searcher/puppeteer-feature.searcher';

@Injectable()
export class MonsHeightSearcher extends PuppeteerFeatureSearcher<
  MoonHeightSearcherDto,
  { name: string },
  MoonHeightSearcherDto
> {
  private readonly source: string = 'wikiwand';

  constructor(
    protected configService: ConfigService,
    protected puppeteerService: PuppeteerService
  ) {
    super(
      configService.get<string>('searcher.moon.url.height-mons'),
      puppeteerService,
      'Mons'
    );
  }

  async buildElementsFromDocument(
    searchParams: { name: string },
    _convertedSearch: any,
    $: CheerioAPI
  ): Promise<MoonHeightSearcherDto> {
    const res: MoonHeightSearcherDto = { height: null, diameter: null };
    const fields = [];
    const cols = $(`[title="${searchParams.name}"]`).parents('tr').find('td');
    const tdHt = cols.eq(3);
    const tdDiam = cols.eq(2);
    let id = searchParams.name.replace(' ', '_');
    if (cols.eq(0).find('a').prop('href')) {
      id = cols.eq(0).find('a').prop('href').split('/')[4];
    }

    const height = tdHt.text().replace('km', '').replace(' ', '');
    const diameter = tdDiam.text().replace('km', '').replace(' ', '');

    if (
      !searchParams.name.startsWith('Montes') &&
      tdHt.length > 0 &&
      !isNaN(Number(height)) &&
      Number(height) > 0
    ) {
      res.height = Number(height);
      fields.push('height');
    }

    if (tdDiam.length > 0 && !isNaN(Number(diameter)) && Number(diameter) > 0) {
      res.diameter = Number(diameter);
    }

    res.externalRef = {
      id,
      source: this.source,
      link: this.url,
      fields
    };

    return res;
  }
}
