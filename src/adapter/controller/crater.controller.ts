import { Controller, Post } from '@nestjs/common';
import { SeedCraterService } from '../../application/service/seed-crater.service';

@Controller()
export class CraterController {
  constructor(private readonly craterService: SeedCraterService) {}

  @Post('/play')
  async playMatch(): Promise<any> {
    const response = await this.craterService.playMatch();
    return response;
  }
}
