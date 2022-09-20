import { User } from './../model/users';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.HOST + '/users/'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private object = new User
  //Almacenar la variable en un get
  @Output()obj: EventEmitter<User> = new EventEmitter()

  constructor( private http:HttpClient) { }

  listAll():Observable<User[]>{
    return this.http.get<User[]>(baseUrl)
  }

  getPostByIdUser(id:string):Observable<User[]>{
    return this.http.get<User[]>(baseUrl+id+"/posts")
  }

  setObject(obj:User){
    this.object=obj
  }

  getObject(){
    return this.object
  }
}
