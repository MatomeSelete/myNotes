import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notesfrontend';
  [x: string]: any;  

  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age
    }

    this['userService'].postData(body)
      .subscribe((response: any) => {
        console.log(response)
      })
  }

  // updateData(value: any) {
  //   let body = {
  //     name: value.name,
  //     age: value.age
  //   }

  //   this.userService.updateData(body, `622ca8c59f6c668226f74f52`)
  //     .subscribe(response => {
  //       console.log(response)
  //     })
  // }

  // delete() {
  //   this.userService.deleteData(`622c573cf23ce54e445b2bed`)
  //     .subscribe(response => {
  //       console.log(response);
  //     })
  // }

}
