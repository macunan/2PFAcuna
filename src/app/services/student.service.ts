import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) { }


  getStudents(): Observable<any> {
    return this.http.get('https://63bed017e348cb076219434a.mockapi.io/alumnos').pipe(
      map((value: any) => value)
    )
  }
}
