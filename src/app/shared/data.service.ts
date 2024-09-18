import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileMetaData } from '../model/file-meta-data';
import { Student } from '../model/student';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage ,private router : Router) { }


  // add student
  addStudent(student: Student) {
    student.id = this.afs.createId();
    //console.log(student)
    //console.log(typeof student)
    this.router.navigate(['/user']);
    return this.afs.collection('/Students').add(student);
    
    
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student : Student) {
     this.afs.doc('/Students/'+student.id).delete();
  }

  // update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
    
}