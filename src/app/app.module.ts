import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})

//singleton pattern is a single instance of a given object in memory passed to several different constructors or components 
//dont forget dependency injection step 
export class AppModule { }
