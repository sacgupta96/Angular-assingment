import { Component } from '@angular/core';

@Component({
  selector: 'app-next-number',
  templateUrl: './next-number.component.html'
})
export class NextNumberComponent {
  private seriesNumber: number;
  model: any = {};

  onSubmit() {
    if (this.model.number > 0) {
      if (this.model.number % 2) {
        this.seriesNumber = Math.pow(this.model.number , 2 ) + 1 ;
      } else {
         this.seriesNumber = Math.pow(this.model.number , 2 ) - 1;
      }
    } else {
      alert('enter valid number');
    }
  }
}
