import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'message/:index',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
 {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'favmsg/:index',
    loadChildren: () => import('./favmsg/favmsg.module').then( m => m.FavmsgPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
