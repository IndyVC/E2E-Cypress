import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVillainComponent } from './add-villain/add-villain.component';
import { VillainCardComponent } from './villain-card/villain-card.component';

const routes: Routes = [
  { path: 'AddVillain', component: AddVillainComponent },
  { path: 'List', component: VillainCardComponent },
  { path: '',   redirectTo: '/List', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
