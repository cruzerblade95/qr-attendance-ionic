import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public angularFireAuth: AngularFireAuth,
    public toast: Toast,
  ) { }

  ngOnInit() {

  }

  logout() {
    try {
      var s = this.angularFireAuth.signOut();

      if (s) {
        this.toast.show(`Logout Successful`, '5000', 'center').subscribe(
          toast => {
            console.log('Logout Successful');
          }
        );
      }

    } catch (error) {
      console.error(error);
    }
  }
}
