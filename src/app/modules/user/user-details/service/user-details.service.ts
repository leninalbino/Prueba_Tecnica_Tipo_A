import { Albums } from './../model/albums';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = environment.HOST + '/users/'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }
  
  findAlbumsById(id:string):Observable<Albums[]>{
    return this.http.get<Albums[]>(baseUrl+id+"/albums")
  }
}
