import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { WebCoreFeatureGraphQLModule } from './web-core-feature-graphql.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'

@NgModule({
  imports: [
    HttpClientModule,
    WebCoreFeatureGraphQLModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class WebCoreFeatureModule {}
