import { Controller, Post } from '@nestjs/common';
import { SeedCraterService } from '../../application/service/seed/features/seed-crater.service';
import { SeedRimaService } from 'src/application/service/seed/features/seed-rima.service';
import { SeedSinusService } from 'src/application/service/seed/features/seed-sinus.service';
import { Feature } from 'src/domain/schema/feature.schema';
import { SeedRupesService } from 'src/application/service/seed/features/seed-rupes.service';
import { SeedDorsaService } from 'src/application/service/seed/features/seed-dorsa.service';
import { SeedMonsService } from 'src/application/service/seed/features/seed-mons.service';
import { SeedCatenaService } from 'src/application/service/seed/features/seed-catena.service';
import { SeedLacusService } from 'src/application/service/seed/features/seed-lacus.service';
import { SeedPromontoriumService } from 'src/application/service/seed/features/seed-promontorium.service';
import { SeedVallisService } from 'src/application/service/seed/features/seed-vallis.service';
import { SeedMareService } from 'src/application/service/seed/features/seed-mare.service';
import { SeedLandingSiteService } from 'src/application/service/seed/features/seed-landing-site.service';
import { SeedSatService } from 'src/application/service/seed/features/seed-sat.service';

@Controller()
export class SeedController {
  constructor(
    private readonly seedCraterService: SeedCraterService,
    private readonly seedRimaService: SeedRimaService,
    private readonly seedSinusService: SeedSinusService,
    private readonly seedRupesService: SeedRupesService,
    private readonly seedDorsaService: SeedDorsaService,
    private readonly seedMonsService: SeedMonsService,
    private readonly seedCatenaService: SeedCatenaService,
    private readonly seedLacusService: SeedLacusService,
    private readonly seedPromontoriumService: SeedPromontoriumService,
    private readonly seedVallisService: SeedVallisService,
    private readonly seedMareService: SeedMareService,
    private readonly seedLandingSiteService: SeedLandingSiteService,
    private readonly seedSatService: SeedSatService
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

  @Post('/seed/catena')
  async seedCatena(): Promise<Feature[]> {
    const response = await this.seedCatenaService.seed();
    return response;
  }

  @Post('/seed/lacus')
  async seedLacus(): Promise<Feature[]> {
    const response = await this.seedLacusService.seed();
    return response;
  }

  @Post('/seed/promontorium')
  async seedPromontorium(): Promise<Feature[]> {
    const response = await this.seedPromontoriumService.seed();
    return response;
  }

  @Post('/seed/vallis')
  async seedVallis(): Promise<Feature[]> {
    const response = await this.seedVallisService.seed();
    return response;
  }

  @Post('/seed/mare')
  async seedMare(): Promise<Feature[]> {
    const response = await this.seedMareService.seed();
    return response;
  }

  @Post('/seed/landingSite')
  async seedLandingSite(): Promise<Feature[]> {
    const response = await this.seedLandingSiteService.seed();
    return response;
  }

  @Post('/seed/sat')
  async seedSat(): Promise<Feature[]> {
    const response = await this.seedSatService.seed();
    return response;
  }
}
