import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyStudent } from 'src/assets/models/myStudent';

@Component({
  selector: 'app-student-manager',
  templateUrl: './student-manager.component.html',
  styleUrls: ['./student-manager.component.css']
})
export class StudentManagerComponent implements OnInit {

  allStudent: MyStudent[] = []
  searchKey: string = ''

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllstudents()
  }
  // get all students
  getAllstudents() {
    this.api.getAllstudents().subscribe((data: any) => {
      console.log(data);

      this.allStudent = data
    })
  }

  //search
  search(event: any) {
    this.searchKey = event.target.value
  }

  // delete student
  deleteStudent(studentId: any) {
    this.api.deleteStudent(studentId).subscribe((data: any) => {
      this.getAllstudents()
    })
  }
}
