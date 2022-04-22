import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.planets = this.http.get('https://swapi.co/api/planets');
    this.planets.subscribe(data => {
      console.log('my data: ', data);
    });
  }

  openDetails(planet) {
    let split = planet.url.split('/');
    let planetId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${planetId}`);
  }

}