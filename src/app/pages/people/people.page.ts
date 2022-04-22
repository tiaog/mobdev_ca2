import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.people = this.http.get('https://swapi.co/api/people');
    this.people.subscribe(data => {
      console.log('my data: ', data);
    });
  }

}
