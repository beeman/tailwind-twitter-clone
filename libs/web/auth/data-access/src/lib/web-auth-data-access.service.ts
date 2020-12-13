import { Injectable } from '@angular/core'
import { ApolloAngularSDK, LoginInput, RegisterInput } from '@beehive/web/core/data-access'

@Injectable()
export class WebAuthDataAccessService {
  constructor(public readonly sdk: ApolloAngularSDK) {}

  me() {
    return this.sdk.me()
  }

  login(input: LoginInput) {
    return this.sdk.login({ input })
  }

  logout() {
    return this.sdk.logout()
  }

  register(input: RegisterInput) {
    return this.sdk.register({ input })
  }
}
