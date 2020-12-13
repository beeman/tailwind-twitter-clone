import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { register } from '@beehive/web/auth/data-access'
import { WebUiFormField } from '@beehive/web/ui-form'

@Component({
  template: `
    <auth-page #f [form]="form" [fields]="fields" pageTitle="Register" buttonTitle="Register" (submit)="submit($event)">
      <a routerLink="/login" class="btn btn-outline-primary">Log in</a>
    </auth-page>
  `,
})
export class RegisterComponent {
  form = new FormGroup({})
  fields = [
    WebUiFormField.email('email', { label: 'Email', required: true }, { focus: true }),
    WebUiFormField.password('password', { label: 'Password', required: true }),
    WebUiFormField.input('username', { label: 'Username', required: false }),
    WebUiFormField.input('firstName', { label: 'First name', required: false }),
    WebUiFormField.input('lastName', { label: 'Last name', required: false }),
  ]

  constructor(private readonly store: Store) {}

  public submit(input) {
    this.store.dispatch(register({ input }))
  }
}
