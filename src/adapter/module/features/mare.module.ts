import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PuppeteerModule } from '../puppeteer.module';
import { MareRepository } from 'src/adapter/repository/features/mare.repository';
import { SeedMareService } from 'src/application/service/seed/features/seed-mare.service';
import { MoonMareSearcher } from 'src/adapter/searcher/planetary-names/features/moon-mare.searcher';
import { Mare, MareSchema } from 'src/domain/schema/mare.schema';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Mare.name, schema: MareSchema }])
  ],
  controllers: [],
  providers: [MareRepository, SeedMareService, MoonMareSearcher],
  exports: [MareRepository, SeedMareService, MoonMareSearcher]
})
export class MareModule {}
