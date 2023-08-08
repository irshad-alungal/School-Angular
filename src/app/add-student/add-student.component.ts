import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyStudent } from 'src/assets/models/myStudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentName:string=''
  student:MyStudent={} as MyStudent

  constructor(private api:ApiService, private router:Router) {}

  ngOnInit(): void {

  }
  addStudent(){
    this.api.addStudent(this.student).subscribe((data:any)=>{
      // navigate to home page 
      this.router.navigateByUrl('')
    })
  }
}
