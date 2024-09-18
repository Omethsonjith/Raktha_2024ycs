import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
import { DataService } from '../../shared/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    age: '',
    mobile: '',
    gendar: '',
    addr: '',
    btype: '',
    city:'',
    province:''
  };

  id: string = '';
  first_name: string = '';
  last_name: string = '';
  age: string = '';
  mobile: string = '';
  gendar: string = '';
  addr: string = '';
 btype: string = '';
 city:string='';
 province:string='';

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  // register() {
  //   this.auth.logout();
  // }

  getAllStudents() {
    this.data.getAllStudents().subscribe(
      (res) => {
        this.studentsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching student data');
      }
    );
  }

  updateStudent() {}

  deleteStudent(student: Student) {
    if (
      window.confirm(
        'Are you sure you want to delete ' +
          student.first_name //+
          //' ' +
          //student.last_name +
          //' ?'
      )
    ) {
      this.data.deleteStudent(student);
    }
  }
}
