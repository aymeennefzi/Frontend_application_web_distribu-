import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Centre} from "../Models/centre";

@Injectable({
  providedIn: 'root'
})
export class CentreService {
  private baseUrl ='http://localhost:8102/Centre-service/Centre'


  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })};

  constructor( private http : HttpClient) { }
  getallCentre (){
    return this.http.get<Centre[]>(this.baseUrl + '/GetAllCentre')
  }

  ajouterCentre(c : Centre){
    return this.http.post<Centre>(this.baseUrl + '/ajouteCentre' , c , this.httpOption)
  }

  deleteCentre (id : number){
    return this.http.delete<Centre>(this.baseUrl + "/DeleteCentre/" + id );
  }
}
