import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login',
  loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'account',
  loadChildren: './account/account.module#AccountPageModule'
  },
  { path: 'settings',
  loadChildren: './settings/settings.module#SettingsPageModule'
  },
  { path: 'logout',
  loadChildren: './logout/logout.module#LogoutPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
