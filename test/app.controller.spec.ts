import { Test, TestingModule } from '@nestjs/testing';
import { CraterController } from '../src/adapter/controller/crater.controller';
import { SeedCraterService } from '../src/application/service/seed/seed-crater.service';

describe('AppController', () => {
  let appController: CraterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CraterController],
      providers: [SeedCraterService]
    }).compile();

    appController = app.get<CraterController>(CraterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.playMatch()).toBe('Hello World!');
    });
  });
});
