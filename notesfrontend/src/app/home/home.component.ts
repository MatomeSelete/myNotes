
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  mynotes = {
    id: '',
    title: '',
    details: '',
    
  };

  notes:any
  editId:any
  edtTitle:any
  edtDetails:any


  notesForm:FormGroup = new FormGroup({
    title:new FormControl(),
    details:new FormControl()
  })
  notesService: any;
  currentTutorial: any;
  router: any;
  baseUrl: any;
  
    constructor(private userService:NotesService, private path:Router) { }
  
    ngOnInit(): void {

      
      this.userService.getNotes().subscribe((notees)=>{
        console.log(notees)
        this.notes = notees
      })


      console.log("On create "+ this.editId)

    }

    

  
    sendIndex(ind:any) { 
    
     this.editId = this.notes[ind].id
     this.edtTitle = this.notes[ind].title 
     this.edtDetails = this.notes[ind].details
    
     //console.log("On Edit "+this.editId)
    
     localStorage.setItem('editId', this.editId)
     localStorage.setItem('editTitle', this.edtTitle)
     localStorage.setItem('editDetails', this.edtDetails)
    
     //this.path.navigate(['/app-view-notes']);
    
    }

    // submitData() {
  
    //   let mynotes = {
    //     title:this.notesForm.value.title,
    //     details:this.notesForm.value.details
    //   }
  
  
    //   this.userService.postData(mynotes)
    //     .subscribe((response: any) => {
    //       console.log(response)
    //     })
    // }

    
    deletData(id:any) {

     let todelete = this.notes[id]
     
      this.userService.deleteData(todelete.id).subscribe(
        (data)=>{
          console.log(data);
          
        }
      );}
    
      editData(data: any) {
        let editnotes = this.notes[data]

        this.userService.updateData(editnotes.data).subscribe(
          (data)=> {
            console.log(data)
          }
        )
      
      }


  cancel() {
    this.path.navigate(['/home']);
  }
    
  
}
