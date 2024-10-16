import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SharedService } from '../shared.service'
import { AppComponent } from '../app.component'




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private app: AppComponent) { }

  clickCountry(event: MouseEvent) {
    const clickedElement = event.target as SVGPathElement;
    const idName = clickedElement.id;
    console.log(idName);

    const url = `https://api.worldbank.org/v2/country/${idName}?format=json`;

    const response: any = this.http.get(url).subscribe(response => {
      this.sharedService.countryApiData = response;
      this.app.getCountryApiData();
    })


  }


}






