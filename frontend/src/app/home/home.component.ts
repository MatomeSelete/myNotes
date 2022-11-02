import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

notes:any

notesForm:FormGroup = new FormGroup({
  title:new FormControl(),
  details:new FormControl()
})

  constructor(private userService:NotesService) { }

  ngOnInit(): void {

    this.userService.getNotes().subscribe((notes)=>{
      this.notes = notes
    })
  }

  
  submitData() {

    let mynotes = {
      title:this.notesForm.value.title,
      details:this.notesForm.value.details
    }



    this.userService.postData(mynotes)
      .subscribe((response: any) => {
        console.log(response)
      })
  }
// update(){

  
//     let mynotes = {
//       title:this.notesForm.value.title,
//       details: value.details
//     }

//     this.userService.updateData(mynotes)
//       .subscribe(response => {
//         console.log(response)
//       })
//   }

// }
  // delete() {
  //   this.userService.deleteData(mynotes)
  //     .subscribe(response => {
  //       console.log(response);
  //     })
  // }

}
