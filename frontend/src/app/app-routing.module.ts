import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes:Routes = [
  
  { path:'', redirectTo:'home', pathMatch:'full' },

  { path:'home', 
  loadChildren: () => import('@app/pages/home/home.module').then( m => m.HomeModule)
  },
 
  { path: 'admin', 
  loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
  canActivate:[AuthGuard]
  
  },

  { path: 'auth',
   loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) 
  },

  { path:'**', 
   loadChildren: () => import('@app/pages/not-found/not-found.module').then( m => m.NotFoundModule)
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
