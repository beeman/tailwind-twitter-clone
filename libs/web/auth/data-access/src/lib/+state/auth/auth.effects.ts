import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { fetch } from '@nrwl/angular'
import { of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'
import { WebAuthDataAccessService } from '../../web-auth-data-access.service'
import * as AuthActions from './auth.actions'

@Injectable()
export class AuthEffects {
  ensureLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.ensureLogin),
      fetch({
        run: () =>
          this.service.me().pipe(
            map((res) => {
              if (!res.data.me) {
                return AuthActions.redirectToLogin({
                  url: this.router?.routerState?.snapshot?.url || '/',
                })
              }
              return AuthActions.loginSuccess({ user: res.data.me })
            }),
          ),
        onError: (action, error) => {
          return AuthActions.logoutFailure({ error: error.message })
        },
      }),
    )
  })

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: ({ input }) =>
          this.service.login(input).pipe(
            map((res) => {
              return AuthActions.loginSuccess({ user: res.data?.login?.user })
            }),
          ),
        onError: (action, error) => AuthActions.registerFailure({ error: error.message }),
      }),
    )
  })

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      fetch({
        run: () =>
          this.service.logout().pipe(
            map((res) => {
              return AuthActions.logoutSuccess()
            }),
          ),
        onError: (action, error) => AuthActions.logoutFailure({ error: error.message }),
      }),
    )
  })

  logoutFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logoutFailure),
      map(() =>
        AuthActions.redirectToLogin({
          url: this.router?.routerState?.snapshot?.url || '/',
        }),
      ),
    )
  })

  redirectToLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.redirectToLogin),
        tap(({ url }) => {
          this.router.navigate(['/login'], url && url !== '/' ? { queryParams: { url } } : {})
        }),
      )
    },
    { dispatch: false },
  )

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      fetch({
        run: ({ input }) =>
          this.service.register(input).pipe(
            map((res) => {
              return AuthActions.registerSuccess({
                user: res.data?.register?.user,
              })
            }),
          ),
        onError: (action, error) => AuthActions.registerFailure({ error: error.message }),
      }),
    )
  })

  constructor(
    private readonly actions$: Actions,
    private readonly service: WebAuthDataAccessService,
    private readonly router: Router,
  ) {}
}
