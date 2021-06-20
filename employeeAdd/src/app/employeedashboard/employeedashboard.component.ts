import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ApiService} from '../shared/api.service'
import {EmployeeModel} from './employeedashboard.model'
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  profileForm!: FormGroup;
  employeeobj:EmployeeModel=new EmployeeModel();

  constructor(private formbuilder: FormBuilder, private ser:ApiService) { }

  ngOnInit(): void {
   this.profileForm = this.formbuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        mobile: ['',Validators.required],
        salary: ['',Validators.required]
    });
  
  }

  employeeposting(){
    this.employeeobj.firstName=this.profileForm.value.firstName;
    this.employeeobj.lastName=this.profileForm.value.lastName;
    this.employeeobj.email=this.profileForm.value.email;
    this.employeeobj.mobile=this.profileForm.value.mobile;
    this.employeeobj.salary=this.profileForm.value.salary;
    
    this.ser.employeespost(this.employeeobj).subscribe(res=>{
      console.log(res);
     
      alert("employee added sucessfully")
    },
    err=>{
      alert("Didnt added try again please")
    })
  
  }
  
onSubmit(){
  console.log(this.profileForm.value);
  console.table(this.profileForm)
}
}
