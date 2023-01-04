import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";

//need to import component decorator for typescript to export to angular 

@Component({
    selector: 'authors', 
    template: `<h1>{{getAuthors()}}</h1>
    <h1>{{authors.length}} authors</h1>
               <ul>
                <li *ngFor="let author of authors">{{author}}</li>
    `
})

export class AuthorsComponent {
    title = "List of Authors";
    authors;

    constructor(service: AuthorsService) {
        this.authors =  service.getAuthors();
    }

    getAuthors() {
        return this.title;
    }
}
