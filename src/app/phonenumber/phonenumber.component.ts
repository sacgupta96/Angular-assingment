import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html'
})
export class PhonenumberComponent {
  public phonenumbers: any[] = [{
    phonenumber : ''
  }];

  addphoneNumber() {
    this.phonenumbers.push({
      phonenumber : ''
    });
  }

  removePhonenumber(i: number) {
    this.phonenumbers.splice(i, 1);
  }

  logValue(form: NgForm) {
    console.log(form.value);
  }
}
