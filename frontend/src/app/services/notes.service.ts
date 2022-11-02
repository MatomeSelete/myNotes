import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { UsersService } from './users.service';



@Injectable({
  providedIn: 'root'
})
export class NotesService {
  userService: any;
  baseURL: any;

  constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.userService.getAllData()
  //     .subscribe((data: any) => {
  //       console.log(data)
  //     })
  // }
  
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data)
  }
  
  
  // submitData(value: any) {
  //   let mynotes = {
  //     title: value.title,
  //     details: value.details
  //   }
  
  //  postData(body)
  //     .subscribe((response: any) => {
  //       console.log(response)
  //     })
  
  getNotes(){

    return this.http.get("http://localhost:3000/users/");
  }


  updateData(data: any): Observable<any> {
    return this.http.patch(`${this.baseURL}/update/2`, data)
  }
  
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`)
  }
  
  // updateData(value: any) {
  //   let mynotes = {
  //     title: value.title,
  //     details: value.details
  //   }
  
    // this.userService.updateData(body, `622ca8c59f6c668226f74f52`)
    //   .subscribe((response: any) => {
    //     console.log(response)
    //   })
    
 
 }

 





// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }

// function postData(data: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function data(data: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function submitData(value: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function value(value: any, any: any) {
//   throw new Error('Function not implemented.');
// }

// function body(body: any) {
//   throw new Error('Function not implemented.');
// }

// function updateData(data: any, any: any, id: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function id(data: any, any: any, id: any, string: any) {
//   throw new Error('Function not implemented.');
// }

// function deleteData(id: any, string: any) {
//   throw new Error('Function not implemented.');
// }

