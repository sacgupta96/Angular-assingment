import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent{
  public componentXArray: any[] = [{
    name : 'ComponentX1',
    componentYArray : []
  }];

  addComponentX() {
    this.componentXArray.push({
      name : `ComponentX${this.componentXArray.length + 1}`,
      componentYArray : []
    });
  }

  addComponentY(index: number) {
    this.componentXArray[index].componentYArray.push({
      data : ''
    });
  }

  saveData(form: NgForm) {
    console.log(this.componentXArray);

    console.log(form.value);

    const keys = Object.keys(form.value);

    let res = '{ ';

    this.componentXArray.forEach( component => {
      res += `${component.name} {`;

      const length = component.componentYArray.length;

      for (let i = 0 ; i < length; i++ ) {
        res += ` ${form.value[keys[i]]},`;
      }
      keys.splice(0 , length);
      res = res.slice(0, -1);
      res += ' }, ';
    });
    res = res.slice(0, -2 );
    res += ' }';

    console.log(res);
  }

  changeXName(index: number) {
    const name = prompt('Enter the component Name');
    if (name) {
      this.componentXArray[index].name = name;
    }
  }

}
