/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema } from '@nestjs/mongoose';

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

  @Prop({ required: true })
  coordinates: {
    lat: number;
    long: number;
  };
}
