import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebCoreDataAccessModule } from '@beehive/web/core/data-access'

import { WebSettingsFeatureComponent } from './settings/web-settings-feature.component'
import { WebPostsFeatureComponent } from './posts/web-posts-feature.component'
import { WebMessagesFeatureComponent } from './messages/web-messages-feature.component'

@NgModule({
  declarations: [WebSettingsFeatureComponent, WebPostsFeatureComponent, WebMessagesFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'posts' },
      { path: 'posts', pathMatch: 'full', component: WebPostsFeatureComponent },
      { path: 'messages', pathMatch: 'full', component: WebMessagesFeatureComponent },
      { path: 'settings', pathMatch: 'full', component: WebSettingsFeatureComponent },
    ]),
  ],
})
export class WebDashboardFeatureModule {}
