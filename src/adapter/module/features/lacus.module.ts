import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PuppeteerModule } from '../puppeteer.module';
import { LacusRepository } from 'src/adapter/repository/features/lacus.repository';
import { SeedLacusService } from 'src/application/service/seed/features/seed-lacus.service';
import { MoonLacusSearcher } from 'src/adapter/searcher/planetary-names/features/moon-lacus.searcher';
import { Lacus, LacusSchema } from 'src/domain/schema/lacus.schema';

@Module({
  imports: [
    PuppeteerModule,
    MongooseModule.forFeature([{ name: Lacus.name, schema: LacusSchema }])
  ],
  controllers: [],
  providers: [LacusRepository, SeedLacusService, MoonLacusSearcher],
  exports: [LacusRepository, SeedLacusService, MoonLacusSearcher]
})
export class LacusModule {}
