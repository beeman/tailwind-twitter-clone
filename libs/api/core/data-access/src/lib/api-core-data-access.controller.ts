import { Controller } from '@nestjs/common'

import { ApiCoreDataAccessService } from './api-core-data-access.service'

@Controller()
export class ApiCoreDataAccessController {
  constructor(private readonly auth: ApiCoreDataAccessService) {}
}
