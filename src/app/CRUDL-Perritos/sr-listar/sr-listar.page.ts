import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Perrito } from 'src/app/interfaces/perrito';
import { PerritoService } from 'src/app/services/perrito.service';
import { IonModal } from '@ionic/angular/common';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-sr-listar',
  templateUrl: './sr-listar.page.html',
  styleUrls: ['./sr-listar.page.scss'],
})
export class SrListarPage implements OnInit, AfterViewInit {
  @ViewChild('miModal', { static: false }) modal: IonModal;

  constructor(
    public conn: PerritoService, 
    public loading: LoadingController, 
    public router: Router
    ) { }

  ngOnInit() {
    this.listarPerritos()
    console.log(this.perritos[0])
  }

  generadorID() {
    let id_mas_alto = 0
    for (let perrito of this.perritos) {
      if (perrito.id > id_mas_alto) {
        id_mas_alto = perrito.id
      }
    }
    return id_mas_alto + 1
  }
  
  ngAfterViewInit() {}

  perritos : Perrito[] = []
  perrito : Perrito;

  async listarPerritos(){
    const loading = await this.loading.create({
      message: 'Cargando Perritos...'
    })
    await loading.present()
    await this.conn.sr_listarPerritos()
      .subscribe({
        next:(data) => {
          this.perritos = data
          this.perrito = this.perritos[0]
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

  name: string;
  message: string = 'No ha ingresado ningún nombre';
  cancel() {
    console.log(this.modal)
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
