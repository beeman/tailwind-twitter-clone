import { Resolver } from '@nestjs/graphql'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'

@Resolver()
export class ApiAuthDataAccessResolver {
  constructor(private readonly service: ApiAuthDataAccessService) {}
}
