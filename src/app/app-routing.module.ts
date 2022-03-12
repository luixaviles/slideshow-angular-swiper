import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './slides/slides.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full',
  },
  {
    path: 'slides',
    component: SlidesComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
