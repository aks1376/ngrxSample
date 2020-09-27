import { ProjectListComponent } from './components/project-list/project-list.component';
import { CreateNewProjectComponent } from './components/create-new-project/create-new-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'projectList', pathMatch: 'full' },
  { path: 'projectList', component: ProjectListComponent },
  { path: 'projectList/add', component: CreateNewProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
