import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Clase } from 'src/app/models/clase.model';
import { ClasesDialogComponent } from 'src/app/shared/components/clases-dialog/clases-dialog.component';
import { ClasesService } from 'src/app/services/clases.service';
@Component({
  selector: 'app-clases-page',
  templateUrl: './clases-page.component.html',
  styleUrls: ['./clases-page.component.scss']
})

export class ClasesPageComponent {

  public clases: any[] = [];
  constructor(private claseService: ClasesService,private readonly dialogService: MatDialog) {
// this.claseService.getClases().subscribe((clases) => (this.clases = clases));
  }
ngOnInit(): void {

this.claseService.getClases().subscribe((clases) => (this.clases = clases));
console.log(this.clases)
    }


  displayedColumns = ['id', 'name','cursoname','edit','delete'];

// constructor(private readonly dialogService: MatDialog) {}

  addClase() {
    const dialog = this.dialogService.open(ClasesDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {





        const lastId = this.clases[this.clases.length - 1]?.id;
        const clase = new Clase(lastId, value.name,value.cursoname);



this.claseService.createClase(clase);
setTimeout(() => {this.ngOnInit(); }, 1000);
      }
    })
  }

  // 
  removeClase(clase: Clase) {
this.claseService.delClase(clase.id);
setTimeout(() => {this.ngOnInit(); }, 1000);
  }

  editClase(clase: Clase) {
    console.log("En editClase")
    console.log(clase)
    const dialog = this.dialogService.open(ClasesDialogComponent, {
      data: clase,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log("En after close data")
           console.log(this.claseService.updateClase(data));
setTimeout(() => {this.ngOnInit(); }, 1000);
      }
    })
  }
}
