import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

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
        console.log('Successfully Registered');
        this.navCtrl.navigateForward('home');
      }

    } catch (error) {
      console.error(error);
    }
  }

}
