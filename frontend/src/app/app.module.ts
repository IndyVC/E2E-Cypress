import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillainCardComponent } from './villain-card/villain-card.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { AddVillainComponent } from './add-villain/add-villain.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { BasicCommandsComponent } from './commands/basic-commands/basic-commands.component';
import { CommandsCardComponent } from './commands/commands-card/commands-card.component';
import { HomeComponent } from './home/home.component';
import { ElementInteractionComponent } from './commands/element-interaction/element-interaction.component';
import { HttpRequestComponent } from './commands/http-request/http-request.component';
import { DebugSettingsCommandsComponent } from './commands/debug-settings-commands/debug-settings-commands.component';
import { UserLookupComponent } from './user-lookup/user-lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainCardComponent,
    VillainListComponent,
    AddVillainComponent,
    BasicCommandsComponent,
    CommandsCardComponent,
    HomeComponent,
    ElementInteractionComponent,
    HttpRequestComponent,
    DebugSettingsCommandsComponent,
    UserLookupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatBadgeModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          javascript: () => import('highlight.js/lib/languages/javascript'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
