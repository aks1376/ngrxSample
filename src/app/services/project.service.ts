import { ProjectItem } from './../models/project-item';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
    constructor(private http: HttpClient) { }

    createProject(newProject: ProjectItem): Observable<{}> {
        const projects: ProjectItem[] = JSON.parse(localStorage.getItem('projects'));
        if (projects) {
            localStorage.setItem('projects', JSON.stringify([...projects, newProject]));
        } else {
            localStorage.setItem('projects', JSON.stringify([newProject]));
        }
        return of({});
    }

    getProjects(): Observable<ProjectItem[]> {
        return of(JSON.parse(localStorage.getItem('projects')));
    }
}
