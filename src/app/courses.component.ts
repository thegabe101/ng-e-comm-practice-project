import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

//need to import component decorator for typescript to export to angular 

@Component({
    selector: 'courses', 
    template: `<h1>{{getTitle()}}</h1>
               <ul>
                <li *ngFor="let course of courses">{{course}}</li>
    `
})

export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses =  service.getCourses();

        //need to instruct angular to inject the dependency of this argument into this constructor 
    }

    getTitle() {
        return this.title;
    }
}