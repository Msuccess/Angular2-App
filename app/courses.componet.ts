import { Component } from 'angular2/core';
import { CourseService } from "./course.service";

@Component ({
       selector:'courses',
       template : `
       <div>
       <h2>Courses</h2>
       <h1>{{Title}}</h1>
       </div>
        <ul>
        <li *ngFor='#course of courses'>
        {{course}}
        </li>
        </ul>
       `,
       providers : [CourseService]
})

export class CoursesComponent {
  Title = "The title of courses page";
  courses;


constructor (courseService : CourseService){
 this.courses = courseService.getCourses();

}


}