import { Injectable } from '@nestjs/common';
import { CraterRepository } from 'src/adapter/repository/crater.repository';

@Injectable()
export class SeedCraterService {
  constructor(private readonly craterRepository: CraterRepository) {}

  async seed(): Promise<any> {
    return;
  }
}
