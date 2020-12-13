import { Float, Query, Resolver } from '@nestjs/graphql'
import { ApiCoreFeatureService } from './api-core-feature.service'

@Resolver()
export class ApiCoreFeatureResolver {
  constructor(private readonly service: ApiCoreFeatureService) {}

  @Query(() => Float, { nullable: true })
  uptime() {
    return this.service.uptime()
  }
}
