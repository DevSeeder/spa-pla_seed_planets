import { Controller, Post } from '@nestjs/common';
import { SeedCraterService } from '../../application/service/seed/features/seed-crater.service';
import { SeedRimaService } from 'src/application/service/seed/features/seed-rima.service';
import { SeedSinusService } from 'src/application/service/seed/features/seed-sinus.service';
import { Feature } from 'src/domain/schema/feature.schema';
import { SeedRupesService } from 'src/application/service/seed/features/seed-rupes.service';
import { SeedDorsaService } from 'src/application/service/seed/features/seed-dorsa.service';
import { SeedMonsService } from 'src/application/service/seed/features/seed-mons.service';

@Controller()
export class SeedController {
  constructor(
    private readonly seedCraterService: SeedCraterService,
    private readonly seedRimaService: SeedRimaService,
    private readonly seedSinusService: SeedSinusService,
    private readonly seedRupesService: SeedRupesService,
    private readonly seedDorsaService: SeedDorsaService,
    private readonly seedMonsService: SeedMonsService
  ) {}

  @Post('/seed/crater')
  async seedCrater(): Promise<Feature[]> {
    const response = await this.seedCraterService.seed();
    return response;
  }

  @Post('/seed/rima')
  async seedRima(): Promise<Feature[]> {
    const response = await this.seedRimaService.seed();
    return response;
  }

  @Post('/seed/sinus')
  async seedSinus(): Promise<Feature[]> {
    const response = await this.seedSinusService.seed();
    return response;
  }

  @Post('/seed/rupes')
  async seedRupes(): Promise<Feature[]> {
    const response = await this.seedRupesService.seed();
    return response;
  }

  @Post('/seed/dorsa')
  async seedDorsa(): Promise<Feature[]> {
    const response = await this.seedDorsaService.seed();
    return response;
  }

  @Post('/seed/mons')
  async seedMons(): Promise<Feature[]> {
    const response = await this.seedMonsService.seed();
    return response;
  }
}
