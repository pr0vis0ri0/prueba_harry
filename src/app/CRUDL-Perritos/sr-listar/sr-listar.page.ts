import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Perrito } from 'src/app/interfaces/perrito';
import { PerritoService } from 'src/app/services/perrito.service';

@Component({
  selector: 'app-sr-listar',
  templateUrl: './sr-listar.page.html',
  styleUrls: ['./sr-listar.page.scss'],
})
export class SrListarPage implements OnInit {

  constructor(public conn: PerritoService, public loading: LoadingController, public router: Router) {}

  perritos : Perrito[] = []

  ngOnInit() {
    this.listarPerritos()
  }

  async listarPerritos(){
    const loading = await this.loading.create({
      message: 'Cargando Perritos...'
    })
    await loading.present()
    await this.conn.sr_listarPerritos()
      .subscribe({
        next:(data) => {
          console.log(data)
          this.perritos = data
          console.log(this.perritos)
          loading.dismiss()
        },
        complete: () => {},
        error: (e) => {
          console.error(e)
          loading.dismiss()
        }
      })
  }

}
