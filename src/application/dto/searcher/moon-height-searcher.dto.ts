import { ExternalReference } from 'src/domain/schema/feature.schema';

export interface MoonHeightSearcherDto {
  height: number | null;
  diameter: number | null;
  externalRef?: ExternalReference;
}
