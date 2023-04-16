import { Body, Controller, Post } from '@nestjs/common';
import { LinkParentFeatureService } from 'src/application/service/feature/link-parent-feature.service';
import { LinkParentFeatureDto } from 'src/application/dto/feature/link-parent-feature.dto';

@Controller()
export class LinkController {
  constructor(
    private readonly linkParentFeatureService: LinkParentFeatureService
  ) {}

  @Post('/link/parent')
  async linkParent(@Body() linkDto: LinkParentFeatureDto): Promise<void> {
    await this.linkParentFeatureService.linkParentFeature(linkDto);
  }
}
