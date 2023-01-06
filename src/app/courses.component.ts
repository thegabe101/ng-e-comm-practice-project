import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

//need to import component decorator for typescript to export to angular 
//bind h1 to text property of a dom object 

@Component({
    selector: 'courses',
    template: `
    {{ course.title | uppercase }} <br/>
    {{ course.rating | number:'1.2-2' }} <br/> 
    {{ course.students }} <br/> 
    <!-- currency pipe is pretty flexible  -->
    {{ course.price | currency:'AUD':false }} <br/>
    {{ course.startDate | date: 'shortDate'}} <br/>
    <input type="text" [(ngModel)] = "title"/>
    <br>
    {{ title | titleCase }}
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <!-- use custom pipe to create textual summary from wiki  -->
    {{ text }}
    <h1 [textContent]="location"></h1><img  [src] ="imageUrl"/>
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
    course = {
        title: "The Complete Ursula K. Le Guin",
        //number pipe keeps us from printing too many digits after decimal 
        rating: 4.952356,
        students: 29,
        price: 1999,
        startDate: new Date(2022, 6, 1)
    };
    text = "Ursula Kroeber Le Guin was an American author best known for her works of speculative fiction, including science fiction works set in her Hainish universe, and the Earthsea fantasy series. She was first published in 1959, and her literary career spanned nearly sixty years, producing more than twenty novels and over a hundred short stories, in addition to poetry, literary criticism, translations, and children's books. Frequently described as an author of science fiction, Le Guin has also been called a 'major voice in American Letters'. Le Guin said she would prefer to be known as an 'American novelist'."
    location = "Location:" + " Seattle";
    imageUrl = 'https://www.wired.com/images_blogs/underwire/2012/07/leguin_ursula_k.jpg';
    colSpan = 2;
    isActive = true;
    email;
    courses;
    title: string;
    // titleCasing($event) {
    //     let casing = $event.target.value;
    //     casing.toLowerCase();
    //     return casing;
    // }
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
            console.log(email);
        }
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();

        //need to instruct angular to inject the dependency of this argument into this constructor 
    }

    getLocation() {
        return this.location;
    }
}