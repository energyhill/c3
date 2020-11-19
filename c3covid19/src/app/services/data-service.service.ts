import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* import 'rxjs/add/operator/map'; */
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  laborData(params: any) {
    /* return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }

  public registerUser(proAuthUser: IProAuthUser) { */
    return this.http
      .post("https://api.c3.ai/covid/api/1/labordetail/fetch", params)
      .pipe(
        map(result => {
          return result;
        })
      );
  }


}
