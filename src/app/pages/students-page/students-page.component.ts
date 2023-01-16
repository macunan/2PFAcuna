import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  public students: any[] = [];
  constructor(private studentService: StudentService,private readonly dialogService: MatDialog) {
// this.studentService.getStudents().subscribe((students) => (this.students = students));
  }
ngOnInit(): void {

this.studentService.getStudents().subscribe((students) => (this.students = students));
console.log(this.students)
    }


  displayedColumns = ['id', 'name', 'email', 'direccion', 'sexo','edad','edit','delete'];

// constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        const student = new Student(lastId, value.name, value.email, value.password, value.direccion, value.sexo, value.edad);



this.studentService.createStudent(student);
setTimeout(() => {this.ngOnInit(); }, 1000);
      }
    })
  }

  // 
  removeStudent(student: Student) {
this.studentService.delStudent(student.id);
setTimeout(() => {this.ngOnInit(); }, 1000);
  }

  editStudent(student: Student) {
    console.log("En editStudent")
    console.log(student)
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        console.log("En after close data")
           console.log(this.studentService.updateStudent(data));
setTimeout(() => {this.ngOnInit(); }, 1000);
      }
    })
  }
}
