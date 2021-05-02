import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';


const routes:Routes = [
   { 
     path:'', 
     children:[
     
        { path:'', component:NotFoundComponent }

     ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotfoundRountingModule { }
