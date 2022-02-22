import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  searchText = '';
  titles = ['Golden Gate Bridge', 'Oracle Park', 'Ghiradelli Square', 'Buckingham Palace', 'Wembley Stadium', 'Big Ben', 'Dolphin Safari Tours', 'Hiking Gibraltar', 'Spanish Coastal Living']
  


cities: any = CITY;
city: any;
posts: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.city = CITY.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
 }

}
