import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AddCatResponse, AdoptCatResponse, Cats } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CatsSerivceService {

  constructor(private apiService: ApiService) { }
  api = "http://localhost:3000" 
  private catsData: Cats[] = [];
  public getCatsAPI(): Observable<Cats[]>{
    return this.apiService.get(this.api+"/getCats")
  }
  public getCatAPI(id: number): Observable<Cats> {
    return this.apiService.get(`${this.api}/getCat/${id}`);
  }
  public updateCatVisit(id: number, cat: any): Observable<Cats>{
    return this.apiService.post(`${this.api}/visitCat/${id}`, {}) //Üres Objektum mint Body, ugyanis, paraméterből kineyerjük az ID-t, és azt kapja meg a backend.
  }
  public addCat(cat: Cats): Observable<AddCatResponse>{
    return this.apiService.post(`${this.api}/addCat`,cat)
  }
  public adoptCat(id: number): Observable<AdoptCatResponse>{
    return this.apiService.delete(`${this.api}/adoptCat/${id}`)
  }
  setCats(data: Cats[]){
    this.catsData = data;
  }
  getCats(): Cats[] {
    return this.catsData;
  }
}
