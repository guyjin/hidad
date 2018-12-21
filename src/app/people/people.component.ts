import { MomentModule } from 'ngx-moment';
import { PEOPLE } from './../people';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  

  getAge = function(born:string, died:string) {
    
  }

  constructor() { }

  ngOnInit() {
  }

  

  people = PEOPLE;

  

}
