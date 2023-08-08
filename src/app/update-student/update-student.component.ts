import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyStudent } from 'src/assets/models/myStudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentId: string = ''
  student:MyStudent={} as MyStudent

  constructor(private activateRoute:ActivatedRoute, private api:ApiService,private router:Router){}

  ngOnInit(): void {
    
    // get student id from url parameter using activateRoute class 
    this.activateRoute.params.subscribe((data)=>{
      this.studentId=data['studentId']
    })

    // call api for getting particular student Details
    this.api.viewStudent(this.studentId).subscribe((data:any)=>{
      this.student=data 
    }) 
  }
  // update student
  updateStudent(){
    // api call to update existing student
    this.api.updateStudent(this.studentId, this.student).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    });
  }

}
