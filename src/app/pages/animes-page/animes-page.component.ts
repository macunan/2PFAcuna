import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';
@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss']
})
export class AnimesPageComponent {
  public animes: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  constructor(private animeService: AnimeService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.animeService.searchAnime(value!))
      ).subscribe((results) => this.animes = results)
  }
}
