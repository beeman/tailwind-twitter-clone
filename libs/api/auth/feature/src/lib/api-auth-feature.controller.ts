import { Controller } from '@nestjs/common'

import { ApiAuthFeatureService } from './api-auth-feature.service'

@Controller()
export class ApiAuthFeatureController {
  constructor(private readonly auth: ApiAuthFeatureService) {}
}
