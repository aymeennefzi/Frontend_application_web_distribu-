import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Boutique} from "../Models/boutique";

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  private baseUrl ='http://localhost:8101/Boutique-service/Boutique' ;
  constructor(private http :HttpClient) { }
  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })};

  ajoutBoutique (b : Boutique){
    return this.http.post<Boutique>(this.baseUrl + '/AjouterBoutique' , b , this.httpOption);
  }

  getAll(){
    return this.http.get<Boutique[]>(this.baseUrl + '/GetAllBoutique' )
  }
  deleteBoutique(i : number){
    return this.http.delete(this.baseUrl + "/delete/" + i);
  }

}
