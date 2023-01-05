import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

//need to import component decorator for typescript to export to angular 
//bind h1 to text property of a dom object 

@Component({
    selector: 'courses', 
    template: `
    <!-- <input (keyup)="onKeyUp($event)"/> -->
    <!-- <input #email (keyup)="onKeyUpEmailValue($event, email.value)"/> -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <h1 [textContent]="title"></h1><img [src] ="imageUrl"/>
    <div (click)= "onDivClicked()">
    <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor] = "isActive ? 'blue': 'white'">Save</button>
    </div>
    <table>
        <tr>
            <td [attr.colSpan]="colSpan"></td>
        </tr>
    </table>`
})

//remember that most html elements have a one to one mapping in the dom, but colspan is not one of them

export class CoursesComponent {
    email;
    title = "Seattle";
    imageUrl = 'https://imageio.forbes.com/i-forbesimg/media/lists/places/seattle-wa_416x416.jpg?format=jpg&height=416&width=416&fit=bounds';
    colSpan = 2;
    courses;
    isActive = true;
    onKeyUp() {
        console.log(this.email);
    }
    onDivClicked() {
        console.log('Div clicked');
    }
    onSave(event: Event) {
        //use this as a prevent default 
        event.stopPropagation();
        console.log('Btn clicked.', event)
    }
    onKeyUpEmailValue($event, email) {
        if ($event.keyCode === 13) {
            console.log(email);}
    }

    constructor(service: CoursesService) {
        this.courses =  service.getCourses();

        //need to instruct angular to inject the dependency of this argument into this constructor 
    }

    getTitle() {
        return this.title;
    }
}