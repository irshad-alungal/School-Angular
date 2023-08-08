import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentId: string = ''
  student: any

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.studentId = data.studentId;

      // Api Call
      this.api.viewStudent(this.studentId).subscribe((data: any) => {
        this.student = data
      })
    })
  }

 
}
