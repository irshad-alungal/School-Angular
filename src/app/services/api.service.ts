import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyStudent } from 'src/assets/models/myStudent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl:string = 'http://localhost:3000/student'

  constructor(private http:HttpClient) { }

  // fuction for get all students 
  getAllstudents(): Observable<MyStudent> {
    return this.http.get(this.baseUrl)
  }
}
