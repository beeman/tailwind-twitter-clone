import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@beehive/web/core/data-access'
import { environment } from '@beehive/web/core/feature'

@Component({
  template: `
    <div class="container my-3 my-md-5">
      <div class="card">
        <div class="card-header">About</div>
        <pre>{{ environment | json }}</pre>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class WebAboutFeatureComponent {
  public environment = environment
  public uptime$ = this.data.uptimeWatch()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
