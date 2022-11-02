import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.scss']
})
export class ViewNotesComponent implements OnInit {
[x: string]: any;


data: any
  titleD:any;
  detailsD:any;

  editForm:FormGroup = new FormGroup({

    title:new FormControl(''),
    details: new FormControl()

  })

 
  update()
  {
      const data ={
        title:this.editForm.value.title,
        details:this.editForm.value.details
      }

      // this.notes.updateData(data).subscribe((eData)=>{
      //   console.table(eData)
        
      // })
  }

   constructor(private userService:NotesService, private path:Router) { }
  ngOnInit(): void {

    this.titleD = localStorage.getItem('editTitle')
    this.detailsD = localStorage.getItem('editDetails')

    console.log(this.titleD)
    console.log(this.detailsD)
    
    // throw new Error('Method not implemented.');
  }

  // editData() {
  //   let editnotes = this.notes[data]

  //   this.userService.updateData(editnotes.data).subscribe(
  //     (data)=> {
  //       console.log(data)
  //     }
  //   )
  
  // }

}
