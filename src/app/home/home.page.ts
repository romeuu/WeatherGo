import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Constants} from "../services/constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WeatherapiService} from "../services/weatherapi.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputBar: any;
  weather: any;

  constructor(
      private http: HttpClient,
      private constants: Constants,
      private formBuilder: FormBuilder,
      private weatherApi: WeatherapiService
  ) {
    this.inputBar = this.formBuilder.group({
      "search":[]
    });
  }

  clearWeather(){
    var weather = document.getElementById('weather');
    weather.innerHTML = '';
  }

  createIcon(id){
    var className = 'wi-owm-' + id;
    var icon = document.createElement('i');
    icon.className = "wi "+className;
    icon.setAttribute('style', 'font-size: 10rem');
    document.getElementById('weather').appendChild(icon);
  }

  start(){
    this.clearWeather();
    var busqueda = this.inputBar.value['search'];
    this.weatherApi.weather(busqueda).subscribe(res => {
      this.weather = res;
      console.log(res['main']);
      this.createIcon(res['weather'][0]['id']);
    });
  }

}
