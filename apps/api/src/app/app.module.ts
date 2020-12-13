import { ApiAuthFeatureModule } from '@beehive/api/auth/feature'
import { ApiCoreFeatureModule } from '@beehive/api/core/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule],
})
export class AppModule {}
