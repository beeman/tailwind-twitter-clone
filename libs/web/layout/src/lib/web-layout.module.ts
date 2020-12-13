import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebLayoutComponent } from './web-layout.component'
import { LayoutFooterModule } from './components/layout-footer/layout-footer.module'
import { LayoutHeaderModule } from './components/layout-header/layout-header.module'

@NgModule({
  declarations: [WebLayoutComponent],
  imports: [CommonModule, RouterModule, LayoutHeaderModule, LayoutFooterModule],
})
export class WebLayoutModule {}
