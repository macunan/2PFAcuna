import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';
import { AnimesPageComponent } from './animes-page/animes-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StreetPageComponent,
    AnimesPageComponent
  ],
  imports: [ // IMPORTANDO
    CommonModule,
    SharedModule, // SHARED MODULE -> CONTIENE LOS COMPONENTES EXPORTADOS CAR1, CAR2, CAR2
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    StreetPageComponent,
    AnimesPageComponent,
  ]
})
export class PagesModule { }
