import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'auth-page',
  template: `
    <div class="h-100 d-flex flex-column justify-content-center align-content-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-3 col-lg-4 offset-md-4">
            <div class="align-self-center">
              <div class="text-center pb-3" *ngIf="pageTitle">
                <img src="assets/images/logo.png" height="50" alt="logo" />
              </div>
              <ng-content select=".error"></ng-content>
              <div class="card">
                <div class="card-body pb-0">
                  <div class="text-center">
                    <h3 class="card-title">{{ pageTitle }}</h3>
                  </div>
                  <web-ui-form #f [form]="form" [fields]="fields" [model]="model" (action)="submitForm()"></web-ui-form>
                </div>
                <div class="p-3 d-flex justify-content-between">
                  <div>
                    <button type="submit" class="btn btn-outline-success" [disabled]="!form.valid" (click)="f.submit()">
                      {{ buttonTitle }}
                    </button>
                  </div>
                  <div>
                    <ng-content></ng-content>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AuthPageComponent {
  @Input() buttonTitle: string
  @Input() form = new FormGroup({})
  @Input() fields = []
  @Input() model = {}
  @Input() pageTitle: string
  @Output() submit = new EventEmitter()

  public submitForm() {
    this.submit.next(this.model)
  }
}
