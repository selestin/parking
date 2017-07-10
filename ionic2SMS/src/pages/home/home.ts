import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private smsVar: SMS) {
    
  }
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
             //  intent: 'INTENT'  // Opens Default sms app
             intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send('09995453566', 'Hello world!',options)
      .then(()=>{
        alert("success");
      },()=>{
      alert("failed");
      });
  }
}
