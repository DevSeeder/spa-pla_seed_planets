import { Controller, Post } from '@nestjs/common';
import { SeedCraterService } from '../../application/service/seed/seed-crater.service';

@Controller()
export class CraterController {
  constructor(private readonly seedCraterService: SeedCraterService) {}

  @Post('/seed/crater')
  async seedCrater(): Promise<any> {
    const response = await this.seedCraterService.seed();
    return response;
  }
}
