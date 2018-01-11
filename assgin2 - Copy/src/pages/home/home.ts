import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { CustomHttpService } from '../../servcie/httpcall.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginSubscription: Subscription;

  constructor(public navCtrl: NavController,
    public httpcall:CustomHttpService,) {

  }


  getDataFromServe(){

    let formData: FormData = new FormData();

    formData.append('username', 'test');
    formData.append('password', 'tst');
    this.loginSubscription = this.httpcall.callServerApi(formData,'data','').subscribe(
      (data) => {
      },
      (error) => {
       alert(error);
      }
    );
  }
}
