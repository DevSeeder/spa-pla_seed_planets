/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema } from '@nestjs/mongoose';

export class Coordinate {
  lat: number;
  long: number;
}

export abstract class Feature {
  @Prop({ required: true })
  wikiId: string;

  @Prop({ required: true })
  wikiTable: string;

  @Prop({ required: true })
  refName: string;

  @Prop({ required: true })
  refType: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Coordinate })
  coordinates: object;

  @Prop({ required: false })
  quad: string;

  @Prop({ required: false })
  additionalInfo: string[];

  @Prop({ required: false })
  externalIds: ExternalId[];

  @Prop({ required: false })
  alias: string[];

  @Prop({ required: false })
  idRegion: string;

  @Prop({ required: false })
  idParent: string;
}

export interface ExternalId {
  source: string;
  id: string;
}
