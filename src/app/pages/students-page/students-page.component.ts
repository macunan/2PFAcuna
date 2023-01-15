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
  public students: any[] = []
  constructor(private studentService: StudentService,private readonly dialogService: MatDialog) {

  }
ngOnInit(): void {
this.studentService.getStudents().subscribe((students) => (this.students = students));
// this.students = this.studentService.getStudents().subscribe();
      console.log(this.students)
// this.newData = this.demoService.Sailors;
// this.message = this.demoService.getData();
    }


  displayedColumns = ['id', 'name', 'email', 'direccion', 'sexo','edad'];

// constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Student(lastId + 1, value.name, value.email, value.password, value.direccion, value.sexo, value.edad)];
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
