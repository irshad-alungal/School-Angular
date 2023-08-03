import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentManagerComponent } from './student-manager/student-manager.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { PageNOTfoundComponent } from './page-notfound/page-notfound.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentManagerComponent,
    AddStudentComponent,
    ViewStudentComponent,
    UpdateStudentComponent,
    PageNOTfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
