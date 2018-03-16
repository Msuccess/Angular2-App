import { AuthoGrowDirectives } from './auto-grow.directive';
import { AuthorServices } from './author.services';
import { Component, Directive } from 'angular2/core';

@Component({
    selector: 'authors',
    template:`
    <H2>{{Title}}</H2>
    <div>

    <input type="text" autoGrow />
    <ul>
    <li *ngFor="#author of authors">
    {{author}}
    </li>
    </ul>
    
    </div>
    `,
    providers : [AuthorServices]
    directives :[AuthoGrowDirectives]
})

export class AuthorsComponent {
Title = "Title for the Authors page";
authors:string[];

constructor(authorServices:AuthorServices)
{
    this.authors = authorServices.getAuthors();
}

}
