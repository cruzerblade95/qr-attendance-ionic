import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../modal/User';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public angularFireAuth: AngularFireAuth,
    public toast: Toast,
  ) { }

  ngOnInit() {
  }

  async login() {
    try {
      var r = await this.angularFireAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password,
      );

      if (r) {
        this.toast.show(`Successfully Login`, '5000', 'center').subscribe(
          toast => {
            console.log('Successfully Login');
          }
        );
        this.navCtrl.navigateForward('home');
      }
    } catch (error) {
      console.error(error);
    }
  }

}
