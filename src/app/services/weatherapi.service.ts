import { Injectable } from '@angular/core';
import {Constants} from "./constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(
      private constants: Constants,
      private http: HttpClient
  ) {
  }

  weather(busqueda){
    return this.http.get(this.constants.API_ROUTE_WEATHER + busqueda +'&units=metric&APPID='+this.constants.APP_ID);
  }

  forecast(busqueda){
    return this.http.get(this.constants.API_ROUTE_FORECAST + busqueda +'&units=metric&APPID='+this.constants.APP_ID);
  }


}
