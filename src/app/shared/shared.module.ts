import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car1Component } from './components/car1/car1.component';
import { Car2Component } from './components/car2/car2.component';
import { Car3Component } from './components/car3/car3.component';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimeItemComponent } from './components/anime-item/anime-item.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavbarCompComponent } from './components/navbar-comp/navbar-comp.component';
import { ToolboxCompComponent } from './components/toolbox-comp/toolbox-comp.component';
import { ContenidoCompComponent } from './components/contenido-comp/contenido-comp.component';


@NgModule({
  declarations: [
    Car1Component,
    Car2Component,
    Car3Component,
    AnimeItemComponent,
    MainMenuComponent,
    NavbarCompComponent,
    ToolboxCompComponent,
    ContenidoCompComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Car1Component,
    Car2Component,
    Car3Component,
    MatCardModule,
    AnimeItemComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MainMenuComponent,
    NavbarCompComponent,
    ToolboxCompComponent,
    ContenidoCompComponent,

  ]
})
export class SharedModule { }