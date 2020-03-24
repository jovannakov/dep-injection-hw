import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-di-hw';

  people = [];

  constructor(private service:PeopleService){
    this.getData();
  }

   getData(){
    this.service.getPeople().subscribe(response => {
      //debugger;
      this.people = response.results;
    });
  }


}
