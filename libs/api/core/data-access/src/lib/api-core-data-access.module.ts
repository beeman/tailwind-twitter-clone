import { Module } from '@nestjs/common'

import { ApiCoreDataAccessService } from './api-core-data-access.service'

@Module({
  providers: [ApiCoreDataAccessService],
  exports: [ApiCoreDataAccessService],
})
export class ApiCoreDataAccessModule {}
