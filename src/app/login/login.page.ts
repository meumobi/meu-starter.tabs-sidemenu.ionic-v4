import { MenuController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }
}
