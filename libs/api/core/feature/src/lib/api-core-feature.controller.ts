import { Controller, Get } from '@nestjs/common'
import { ApiCoreFeatureService } from './api-core-feature.service'

@Controller()
export class ApiCoreFeatureController {
  constructor(private readonly service: ApiCoreFeatureService) {}

  @Get('uptime')
  uptime() {
    return this.service.uptime()
  }
}
