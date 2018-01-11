import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public fib: any = []; // Initialize array!
  public series: any;
  public tempArr:any =[];
  public inputedNumber:any;
  constructor(public navCtrl: NavController) {

  }

//  This function contain the logic for create the series
  public generateseries(): any {
    console.log(this.inputedNumber);
    let i;
    this.series = '';
    this.tempArr = [];
    this.fib = [];
    this.fib[0] = 0;
    this.fib[1] = 1;
    for (i = 2; i <= Number(this.inputedNumber); i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      this.fib[i] = this.fib[i - 2] + this.fib[i - 1];
      this.tempArr[i-2] = this.fib[i];
      console.log(this.fib[i]);
    }

    this.series = this.tempArr;
  }

  public keyPress(event: any): any {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
