import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Clase } from '../models/clase.model';
@Injectable({
  providedIn: 'root'
})
export class ClasesService{

private url='https://63bed017e348cb076219434a.mockapi.io/clases/';
  constructor(private http: HttpClient) { }
  getClases(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((value: any) => value)
    )

  }


  delClase(id:string):Observable<any> {
    console.log("En delStudent")
    console.log(id)
    console.log(this.url+id)
   this.http.delete(this.url+id).subscribe(data=> {console.log(data);});
   return this.getClases();
}



 updateClase(stu:Clase): Observable<any> {
   console.log("In update clase")
   console.log(stu)
   console.log(this.url+stu.id)
   this.http.put(this.url+stu.id,stu).subscribe(data=> {console.log(data);});
    return this.http.put<Clase>(this.url+stu.id,stu);
  }

 createClase(stu:Clase): Observable<any> {
   console.log("In crear clase")
   console.log(stu)
   console.log(this.url+stu.id)
   this.http.post(this.url,stu).subscribe(data=> {console.log(data);});
    return this.http.post<Clase>(this.url,stu);
  }



}
