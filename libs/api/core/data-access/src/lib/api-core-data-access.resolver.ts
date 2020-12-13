import { Resolver } from '@nestjs/graphql'

import { ApiCoreDataAccessService } from './api-core-data-access.service'

@Resolver()
export class ApiCoreDataAccessResolver {
  constructor(private readonly service: ApiCoreDataAccessService) {}
}
