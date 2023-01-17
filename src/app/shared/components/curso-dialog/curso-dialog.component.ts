import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso.model';
@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})







export class CursoDialogComponent {
  nameControl = new FormControl('')
  idControl = new FormControl('')


  cursoForm = new FormGroup({
    name: this.nameControl,
    id:this.idControl
  })

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Curso | null,
  ) {
    if (data) {
      this.cursoForm.patchValue(data)

    }
  }

  close() {
    this.dialogRef.close()
  }
}
