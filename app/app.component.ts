import { Component, Directive } from 'angular2/core';
import { CoursesComponent } from './courses.componet';
import { AuthorsComponent } from './authors.component';


@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
    `,

    directives: [CoursesComponent , AuthorsComponent]


})
export class AppComponent { }