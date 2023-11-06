import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router, private platform: Platform) {
    this.initializeApp();
  }

  navegarA(ruta : string){
    this.router.navigate([ruta]);
    this.menu.close('first');
  }

  cerrarMenu() {
    this.menu.close('first');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Forzar el modo light
      document.body.classList.toggle('dark', false);
    });
  }
}
