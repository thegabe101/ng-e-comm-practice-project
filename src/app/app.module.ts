import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})

//singleton pattern is a single instance of a given object in memory passed to several different constructors or components 
//dont forget dependency injection step 
export class AppModule { }
