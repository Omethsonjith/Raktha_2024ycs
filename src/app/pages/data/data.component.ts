import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Student } from '../../model/student';
import { DataService } from '../../shared/data.service';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class DataComponent {
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

  formGroup: FormGroup;
  //  constructor(private auth: AuthService, private data: DataService) { }
  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private router : Router
  ) {
    this.formGroup = this.formBuilder.group({
      first_name: this.formBuilder.control('', Validators.required),
      last_name: this.formBuilder.control('', Validators.required),
      age: this.formBuilder.control('', Validators.required),
      gendar: this.formBuilder.control('', Validators.required),
      mobile: this.formBuilder.control('', Validators.required),
      addr: this.formBuilder.control('', Validators.required),
      btype: this.formBuilder.control('', Validators.required),
      city: this.formBuilder.control('', Validators.required),
      province: this.formBuilder.control('', Validators.required),
    });
  }

  resetForm() {
    this.formGroup.reset();
  }

  save() {
    //console.log(this.formGroup.value);
    //console.log(typeof this.formGroup);

    this.studentObj.id = '';
    this.studentObj.first_name = this.formGroup.value.first_name;
    this.studentObj.last_name = this.formGroup.value.last_name;
    this.studentObj.mobile = this.formGroup.value.mobile;
    //this.studentObj.age = this.formGroup.value.age;
    this.studentObj.gendar = this.formGroup.value.gendar;
    this.studentObj.addr = this.formGroup.value.addr;
    this.studentObj.btype = this.formGroup.value.btype;
    this.studentObj.city = this.formGroup.value.city;
    this.studentObj.province = this.formGroup.value.province;
    //console.log(typeof this.studentObj.age);
    //console.log( this.studentObj.age);
    console.log(this.formGroup);
    this.studentObj.age = formatDate(this.formGroup.value.age);
    //console.log(this.studentObj.age);

    this.data.addStudent(this.studentObj);

    //this.data.addStudent(this.formGroup);
    this.resetForm();
  }
}
function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0'); // Get the day and add leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so add 1
  const year = date.getFullYear(); // Get the year
  return `${day}/${month}/${year}`;
}
