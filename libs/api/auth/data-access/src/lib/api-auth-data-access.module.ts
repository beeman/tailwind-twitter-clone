import { ApiCoreDataAccessModule } from '@beehive/api/core/data-access'
import { ApiCoreFeatureModule } from '@beehive/api/core/feature'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiCoreDataAccessModule,
    ApiCoreFeatureModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'NXPM_STACK_SECRET1062508',
    }),
  ],
  exports: [ApiAuthDataAccessService],
  providers: [ApiAuthDataAccessService, JwtStrategy],
})
export class ApiAuthDataAccessModule {}
