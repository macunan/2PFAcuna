import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavbarCompComponent } from './components/navbar-comp/navbar-comp.component';
import { ToolboxCompComponent } from './components/toolbox-comp/toolbox-comp.component';
import { ContenidoCompComponent } from './components/contenido-comp/contenido-comp.component';
import {Routes,RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {StudentsPageComponent} from '../pages/students-page/students-page.component';
import {CursosPageComponent} from   '../pages/cursos-page/cursos-page.component';
import {ClasesPageComponent} from   '../pages/clases-page/clases-page.component';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';
import { ClasesDialogComponent } from './components/clases-dialog/clases-dialog.component';

const appRoute: Routes = [
{path:'',component:StudentsPageComponent},
{path:'cursos',component:CursosPageComponent},
{path:'clases',component:ClasesPageComponent} 
// {path:'Valparaiso',component:ValparaisoComponent} ,
// {path:'About',component:AboutComponent}
];

@NgModule({
  declarations: [
    MainMenuComponent,
    NavbarCompComponent,
    ToolboxCompComponent,
    ContenidoCompComponent,
    StudentDialogComponent,
    CursoDialogComponent,
    ClasesDialogComponent,
  ],
  imports: [
    CommonModule,
RouterModule.forRoot(appRoute),
BrowserModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
MatInputModule,
MatIconModule,
ReactiveFormsModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MainMenuComponent,
    NavbarCompComponent,
    ToolboxCompComponent,
    ContenidoCompComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    StudentDialogComponent,
  ]
})
export class SharedModule { }
