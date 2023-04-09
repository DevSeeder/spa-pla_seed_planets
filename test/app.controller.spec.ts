import { Test, TestingModule } from '@nestjs/testing';
import { SeedController } from '../src/adapter/controller/seed.controller';
import { SeedCraterService } from '../src/application/service/seed/features/seed-crater.service';

describe('AppController', () => {
  let appController: SeedController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SeedController],
      providers: [SeedCraterService]
    }).compile();

    appController = app.get<SeedController>(SeedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.playMatch()).toBe('Hello World!');
    });
  });
});
