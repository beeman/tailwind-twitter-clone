import { Controller } from '@nestjs/common'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'

@Controller()
export class ApiAuthDataAccessController {
  constructor(private readonly auth: ApiAuthDataAccessService) {}
}
