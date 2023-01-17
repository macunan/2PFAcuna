import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clase} from 'src/app/models/clase.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component,Inject } from '@angular/core';
@Component({
  selector: 'app-clases-dialog',
  templateUrl: './clases-dialog.component.html',
  styleUrls: ['./clases-dialog.component.scss']
})
export class ClasesDialogComponent {

  nameControl = new FormControl('')
  idControl = new FormControl('')
  cursonameControl = new FormControl('')


  claseForm = new FormGroup({
    name: this.nameControl,
    cursoname: this.cursonameControl,
    id:this.idControl
  })

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Clase | null,
  ) {
    if (data) {
      this.claseForm.patchValue(data)

    }
  }

  close() {
    this.dialogRef.close()
  }
}













