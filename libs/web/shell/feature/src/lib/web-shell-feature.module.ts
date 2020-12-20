import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WebAuthDataAccessModule, IsLoggedInGuard } from '@beehive/web/auth/data-access'
import { WebCoreDataAccessModule } from '@beehive/web/core/data-access'
import { WebLayoutComponent } from '@beehive/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@beehive/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'about',
        loadChildren: () => import('@beehive/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('@beehive/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), WebCoreDataAccessModule, WebAuthDataAccessModule],
})
export class WebShellFeatureModule {}
