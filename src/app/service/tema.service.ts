import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})

export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${environment.server}${environment.port}/tema`, this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`${environment.server}${environment.port}/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`${environment.server}${environment.port}/tema/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    // return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
    return this.http.post<Tema>(`${environment.server}${environment.port}/tema`, tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(`${environment.server}${environment.port}/tema`, tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`${environment.server}${environment.port}/tema/${id}`, this.token)
  }

}

