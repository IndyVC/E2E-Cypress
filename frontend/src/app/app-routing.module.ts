import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCommandsComponent } from './commands/basic-commands/basic-commands.component';
import { CommandsCardComponent } from './commands/commands-card/commands-card.component';
import { DebugSettingsCommandsComponent } from './commands/debug-settings-commands/debug-settings-commands.component';
import { ElementInteractionComponent } from './commands/element-interaction/element-interaction.component';
import { HttpRequestComponent } from './commands/http-request/http-request.component';
import { HomeComponent } from './home/home.component';
import { UserLookupComponent } from './user-lookup/user-lookup.component';
import { VillainCardComponent } from './villain-card/villain-card.component';

const routes: Routes = [
  { path: 'Villains', component: VillainCardComponent },
  {
    path: 'Commands',
    component: CommandsCardComponent,
    children: [
      { path: 'Basic/:command', component: BasicCommandsComponent },
      { path: 'Element/:command', component: ElementInteractionComponent },
      { path: 'Http/:command', component: HttpRequestComponent },
      { path: 'Debug/:command', component: DebugSettingsCommandsComponent },
      //{ path: '**', redirectTo: 'Basic/get' },
    ],
  },
  { path: 'user-lookup', component: UserLookupComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
