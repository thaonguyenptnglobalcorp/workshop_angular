import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop Angular';
  baseUrl = 'https://dotnet-api-hno4.onrender.com/api/Home';
  value = 1;

  constructor(private http: HttpClient) {
    
  }

  async add() {
    await firstValueFrom(this.http.get<number>(this.baseUrl + '/add', {
      params: {
        value: this.value
      }
    })).then((data: number) => {
      this.value = data;
    });
  }

  async minus() {
    await firstValueFrom(this.http.get<number>(this.baseUrl + '/minus', {
      params: {
        value: this.value
      }
    })).then((data: number) => {
      this.value = data;
    });
  }
}
