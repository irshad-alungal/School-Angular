import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagerComponent } from './student-manager/student-manager.component'
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { PageNOTfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  {
    path: '',redirectTo: '/student/admin',pathMatch:'full'
  },
  {
    path: 'student/admin',component:StudentManagerComponent
  },
  {
    path: 'student/add',component:AddStudentComponent
  },
  {
    path: 'student/edit/:studentId',component:UpdateStudentComponent
  },
  {
    path: 'student/view/:studentId',component:ViewStudentComponent
  },
  {
    path: '**',component:PageNOTfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
