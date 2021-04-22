import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Toast } from '@ionic-native/toast/ngx';

import { User } from '../../modal/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public toast: Toast,
  ) { }

  ngOnInit() {
  }

  async register() {
    try {
      var r = await this.angularFireAuth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password,
      );

      if (r) {
        this.toast.show(`Successfully Registered`, '5000', 'center').subscribe(
          toast => {
            console.log('Successfully Registered');
          }
        );
        this.navCtrl.navigateForward('home');
      }

    } catch (error) {
      console.error(error);
    }
  }

}
