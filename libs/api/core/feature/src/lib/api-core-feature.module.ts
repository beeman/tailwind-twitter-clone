import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { join } from 'path'

import { configuration } from './config/configuration'
import { validationSchema } from './config/validation'
import { ApiCoreFeatureController } from './api-core-feature.controller'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'
import { ApiCoreFeatureService } from './api-core-feature.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      sortSchema: true,
    }),
    GraphQLIntercomModule.forRoot({ pubSub: new PubSub() }),
  ],
  controllers: [ApiCoreFeatureController],
  providers: [ApiCoreFeatureResolver, ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
})
export class ApiCoreFeatureModule {}
