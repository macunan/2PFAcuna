import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Student } from '../models/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
private url='https://63bed017e348cb076219434a.mockapi.io/alumnos/';

  constructor(private http: HttpClient) { }


  getStudents(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((value: any) => value)
    )

  }


  delStudent(id:string):Observable<any> {
    console.log("En delStudent")
    console.log(id)
    console.log(this.url+id)
   this.http.delete(this.url+id).subscribe(data=> {console.log(data);});
   return this.getStudents();
}



 updateStudent(stu:Student): Observable<any> {
   console.log("In update student")
   console.log(stu)
   console.log(this.url+stu.id)
   this.http.put(this.url+stu.id,stu).subscribe(data=> {console.log(data);});
    return this.http.put<Student>(this.url+stu.id,stu);
  }

 createStudent(stu:Student): Observable<any> {
   console.log("In update student")
   console.log(stu)
   console.log(this.url+stu.id)
   this.http.post(this.url,stu).subscribe(data=> {console.log(data);});
    return this.http.post<Student>(this.url,stu);
  }




}
