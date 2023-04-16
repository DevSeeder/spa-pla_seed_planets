import { Module } from '@nestjs/common';
import { VallisRepository } from '../../repository/features/vallis.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Vallis, VallisSchema } from 'src/domain/schema/vallis.schema';
import { SeedVallisService } from 'src/application/service/seed/features/seed-vallis.service';
import { MoonVallisSearcher } from 'src/adapter/searcher/planetary-names/features/moon-vallis.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Vallis.name, schema: VallisSchema }])
  ],
  controllers: [],
  providers: [VallisRepository, SeedVallisService, MoonVallisSearcher],
  exports: [VallisRepository, SeedVallisService, MoonVallisSearcher]
})
export class VallisModule {}
