import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {ICar} from "../models";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars);
  };

  createCar(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars, car);
  };

  getCarById(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>(urls.cars + '/' + id);
  };

  deleteCarById(id: number): Observable<void> {
    return this.httpClient.delete<void>(urls.cars + '/' + id);
  };

  updateCarById(id: number, carForUpdate: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(urls.cars + '/' + id, carForUpdate)
  }
}
