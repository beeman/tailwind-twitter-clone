import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebLayoutComponent } from './web-layout.component'

@NgModule({
  declarations: [WebLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class WebLayoutModule {}
