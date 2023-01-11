import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  searchAnime(searchText: string): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime', {
      params: {
        q: searchText
      }
    }).pipe(
      map((value: any) => value.data)
    )
  }
}
