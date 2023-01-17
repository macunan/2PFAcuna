import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso.model';
import { CursoDialogComponent } from 'src/app/shared/components/curso-dialog/curso-dialog.component';
import { CursoService } from 'src/app/services/curso.service';
@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrls: ['./cursos-page.component.scss']
})
export class CursosPageComponent {

  public cursos: any[] = [];
  constructor(private cursoService: CursoService,private readonly dialogService: MatDialog) {
// this.cursoService.getCursos().subscribe((cursos) => (this.cursos = cursos));
  }
ngOnInit(): void {

this.cursoService.getCursos().subscribe((cursos) => (this.cursos = cursos));
console.log(this.cursos)
    }


  displayedColumns = ['id', 'name','edit','delete'];

// constructor(private readonly dialogService: MatDialog) {}

  addCurso() {
    const dialog = this.dialogService.open(CursoDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {





        const lastId = this.cursos[this.cursos.length - 1]?.id;
        const curso = new Curso(lastId, value.name);



this.cursoService.createCurso(curso);
setTimeout(() => {this.ngOnInit(); }, 1000);
      }
    })
  }

  // 
  removeCurso(curso: Curso) {
this.cursoService.delCurso(curso.id);
setTimeout(() => {this.ngOnInit(); }, 1000);
  }

  editCurso(curso: Curso) {
    console.log("En editCurso")
    console.log(curso)
    const dialog = this.dialogService.open(CursoDialogComponent, {
      data: curso,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log("En after close data")
           console.log(this.cursoService.updateCurso(data));
setTimeout(() => {this.ngOnInit(); }, 1000);
      }
    })
  }
}
