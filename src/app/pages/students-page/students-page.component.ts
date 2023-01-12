import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';
import { StudentService } from 'src/app/services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs';
@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
public students: any[] = []
  public searchControl = new FormControl('')
  public form = new FormGroup({
    search: this.searchControl,
  });
  constructor(private studentService: StudentService,private readonly dialogService: MatDialog) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.studentService.getStudents())
      ).subscribe((results) => this.students = results)
  }


  displayedColumns = ['id', 'name', 'email', 'password', 'direccion', 'sexo','edad'];

// constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Student(lastId + 1, value.name, value.email, 'M')];
      }
    })
  }

  // 
  removeStudent(student: Student) {
    this.students = this.students.filter(
      (stu) => stu.id !== student.id // Deja todos los elementos donde se cumpla esta condicion
    );
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu)
      }
    })
  }
}
