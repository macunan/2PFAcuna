import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentsPageComponent } from './students-page/students-page.component';
import { CursosPageComponent } from './cursos-page/cursos-page.component';
import { ClasesPageComponent } from './clases-page/clases-page.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsPageComponent,
    CursosPageComponent,
    ClasesPageComponent
  ],
  imports: [ // IMPORTANDO
    CommonModule,
    SharedModule, // SHARED MODULE -> CONTIENE LOS COMPONENTES EXPORTADOS CAR1, CAR2, CAR2
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
 MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    StudentsPageComponent
  ]
})
export class PagesModule { }
