import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebCoreDataAccessModule } from '@beehive/web/core/data-access'
import { WebAboutFeatureComponent } from './web-about-feature.component'

@NgModule({
  declarations: [WebAboutFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebAboutFeatureComponent }]),
  ],
})
export class WebAboutFeatureModule {}
