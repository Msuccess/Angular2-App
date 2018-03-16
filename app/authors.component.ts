import { AuthorServices } from './author.services';
import { Component } from 'angular2/core';

@Component({
    selector: 'authors',
    template:`
    <H2>{{Title}}</H2>
    <div>
    <ul>
    <li *ngFor="#author of authors">
    {{author}}
    </li>
    </ul>
    
    </div>
    `,
    providers : [AuthorServices]
})

export class AuthorsComponent {
Title = "Title for the Authors page";
authors:string[];

constructor(authorServices:AuthorServices)
{
    this.authors = authorServices.getAuthors();
}

}
