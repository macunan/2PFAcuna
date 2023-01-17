import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Curso } from '../models/curso.model';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
private url='https://63bed017e348cb076219434a.mockapi.io/cursos/';

  constructor(private http: HttpClient) { }


  getCursos(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((value: any) => value)
    )

  }


  delCurso(id:string):Observable<any> {
    console.log("En delStudent")
    console.log(id)
    console.log(this.url+id)
   this.http.delete(this.url+id).subscribe(data=> {console.log(data);});
   return this.getCursos();
}



 updateCurso(stu:Curso): Observable<any> {
   console.log("In update curso")
   console.log(stu)
   console.log(this.url+stu.id)
   this.http.put(this.url+stu.id,stu).subscribe(data=> {console.log(data);});
    return this.http.put<Curso>(this.url+stu.id,stu);
  }

 createCurso(stu:Curso): Observable<any> {
   console.log("In update student")
   console.log(stu)
   console.log(this.url+stu.id)
   this.http.post(this.url,stu).subscribe(data=> {console.log(data);});
    return this.http.post<Curso>(this.url,stu);
  }




}
