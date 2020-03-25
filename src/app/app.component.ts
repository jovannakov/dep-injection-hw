import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-di-hw';
  public page = 1;
  people = [];

  constructor(private service:PeopleService){
    this.getData(this.page);
  }

   getData(page){
    this.service.getPeople(page).subscribe(response => {
      //debugger;
      let temporary = response;
      console.log(response);
      debugger;
      this.people = temporary.results;
    });
  }

  NextPage(){
    if(this.page <= 5){
      this.page++;
      this.getData(this.page);
    }

  }

  PreviousPage(){
    if(this.page > 1){
      this.page--;
      this.getData(this.page);
    }
  }

}
