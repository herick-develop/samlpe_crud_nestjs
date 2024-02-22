import { Module } from '@nestjs/common';
import { SupportProviders } from './support.provider';

@Module({
  providers: [...SupportProviders],
  exports: [...SupportProviders],
})
export class SupportModule {}