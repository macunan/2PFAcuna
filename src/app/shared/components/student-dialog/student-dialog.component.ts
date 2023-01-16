import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent {
  nameControl = new FormControl('')
  pass1Control=new FormControl('')
  pass2Control=new FormControl('')
  emailControl = new FormControl('')
  direccionControl = new FormControl('')
  sexoControl = new FormControl('M')
  edadControl = new FormControl(0)
  idControl = new FormControl('')


  studentForm = new FormGroup({
    name: this.nameControl,
    password: this.pass1Control,
    email: this.emailControl,
    direccion: this.direccionControl,
    sexo: this.sexoControl,
    edad: this.edadControl,
    id:this.idControl
  })

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null,
  ) {
    if (data) {
      this.studentForm.patchValue(data)

    }
  }

  close() {
    this.dialogRef.close()
  }
}
