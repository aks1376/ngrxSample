import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './components/utils/stepper/stepper.component';
import { CreateNewProjectComponent } from './components/create-new-project/create-new-project.component';
import { ProjectDetailsComponent } from './components/create-new-project/project-details/project-details.component';
import { ProjectSettingsComponent } from './components/create-new-project/project-settings/project-settings.component';
import { DeliveryDetailsComponent } from './components/create-new-project/delivery-details/delivery-details.component';
import { ReviewAndSubmitComponent } from './components/create-new-project/review-and-submit/review-and-submit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectService } from './services/project.service';
import { StoreModule } from '@ngrx/store';
import { createNewProjectReducer } from './components/create-new-project/store/create-new-project.reducer';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectListItemComponent } from './components/project-list/project-list-item/project-list-item.component';

const material = [
  MatCheckboxModule,
  MatButtonModule,
  MatMenuModule
];
@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    CreateNewProjectComponent,
    ProjectDetailsComponent,
    ProjectSettingsComponent,
    DeliveryDetailsComponent,
    ReviewAndSubmitComponent,
    ProjectListComponent,
    ProjectListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ...material,
    StoreModule.forRoot({ createProject: createNewProjectReducer })
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
