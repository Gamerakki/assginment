import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public inputedNumber: any;
  public primeOrNot: any;
  constructor(public navCtrl: NavController) {

  }

  /**
   * This function is used for cheking whether the entered number is 
   * prime or not;
   * @param numberEntered // number entered in the input box
   */
  public testing_for_prime(numberEntered: any): any {

    if (numberEntered === 1) {
      this.primeOrNot = false;
      console.log(this.primeOrNot, '1');
    }
    else if (numberEntered === 2) {
      this.primeOrNot = true;
      console.log(this.primeOrNot, '2');
    } else {
      let tempBool;
      for (let x = 2; x < numberEntered; x++) {
        if (numberEntered % x === 0) {
          tempBool = false;

          break;
        } else {
          tempBool = true;
        }
      }
      this.primeOrNot = tempBool;
      console.log(this.primeOrNot);
    }

  }

  /**
   * It's a function used to make sure only numerical values
   *  are only enter
   * 
   * @param event // event from the key press to check if pressed charcode 
   * matches the pattern or not
   */
  public keyPress(event: any): any {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  public checkForPrime(): any {
    this.primeOrNot = false;
    if (this.inputedNumber !== "" || this.inputedNumber !== 0) {
      console.log(this.inputedNumber);
      this.inputedNumber = Number(this.inputedNumber);
      this.testing_for_prime(this.inputedNumber);

    } else {
      alert('Please enter a valid number')
    }

  }
}
