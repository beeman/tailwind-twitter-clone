import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebCoreDataAccessModule } from '@beehive/web/core/data-access'
import { WebDashboardFeatureComponent } from './web-dashboard-feature.component'

@NgModule({
  declarations: [WebDashboardFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebDashboardFeatureComponent }]),
  ],
})
export class WebDashboardFeatureModule {}
