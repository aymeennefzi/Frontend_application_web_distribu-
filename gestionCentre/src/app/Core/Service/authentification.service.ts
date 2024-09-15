import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Employe} from "../Models/employe";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8081/Auth-service/auth';

  ajouterEmploye(employe: Employe) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/json',
      // 'Authorization': 'Bearer yourAccessToken'

    });

    const body = new HttpParams()
      .set('nom', employe.nom)
      .set('prenom', employe.prenom)
      .set('email', employe.email)
      .set('password', employe.password)
      .set('cin', employe.cin)
      // .set('dateNaissance', employe.dateNaissance.toString());

    const url = this.baseUrl + '/registerEmployee';
    return this.http.post<Employe>(url, body.toString(), {headers});
  }
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
