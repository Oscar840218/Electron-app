import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MathComponent } from './components/math/math.component';

const appRoutes: Routes = [
{ 
    path: '', 
    component: HomeComponent 
},
{ 
    path: 'math', 
    component: MathComponent
},
{ path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }