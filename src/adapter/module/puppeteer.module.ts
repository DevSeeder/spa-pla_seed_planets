import { Module } from '@nestjs/common';
import { PuppeteerService } from 'src/application/service/puppeteer/puppeteer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PuppeteerService],
  exports: [PuppeteerService]
})
export class PuppeteerModule {}
