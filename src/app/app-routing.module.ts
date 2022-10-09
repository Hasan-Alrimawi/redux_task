import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesterComponent } from './views/tester/tester.component';

const routes: Routes = [
  {path: "main", component: TesterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
