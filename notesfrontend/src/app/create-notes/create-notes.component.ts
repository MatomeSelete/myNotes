import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {

  mynotes = {
    title: '',
    details: '',
    // published: false
  };
  submitted = false;
  path: any;
  router: any;


  constructor(private mynote: NotesService) { }

  ngOnInit(): void {
  
   
  }

  saveNotes(): void {
    const data = {
      title: this.mynotes.title,
      details: this.mynotes.details
    };

    this.mynote.create(data)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e: any) => console.error(e)
      });

      this.router.navigate(['/home']);
  }

  // newTutorial(): void {
  //   this.submitted = false;
  //   this.mynotes = {
  //     title: '',
  //     details: '',
  //     // published: false
  //   };
  // }

  cancel() {
    this.router.navigate(['/home']);
  }


}
