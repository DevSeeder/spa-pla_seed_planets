import { Module } from '@nestjs/common';
import { SinusRepository } from '../../repository/features/sinus.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Sinus, SinusSchema } from 'src/domain/schema/sinus.schema';
import { SeedSinusService } from 'src/application/service/seed/features/seed-sinus.service';
import { MoonSinusSearcher } from 'src/adapter/searcher/planetary-names/features/moon-sinus.searcher';
import { PuppeteerModule } from '../puppeteer.module';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Sinus.name, schema: SinusSchema }])
  ],
  controllers: [],
  providers: [SinusRepository, SeedSinusService, MoonSinusSearcher],
  exports: [SinusRepository, SeedSinusService, MoonSinusSearcher]
})
export class SinusModule {}
