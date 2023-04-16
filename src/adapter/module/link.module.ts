import { Module } from '@nestjs/common';
import { LinkController } from '../controller/link.controller';
import { LinkParentFeatureService } from 'src/application/service/feature/link-parent-feature.service';
import { FeatureRepository } from '../repository/feature.repository';
import { Feature, FeatureSchema } from 'src/domain/schema/feature.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feature.name, schema: FeatureSchema }])
  ],
  controllers: [LinkController],
  providers: [LinkParentFeatureService, FeatureRepository],
  exports: [LinkParentFeatureService, FeatureRepository]
})
export class LinkModule {}
