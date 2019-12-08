import { InquilinoService } from './../inquilino.service';
import { Inquilino } from './../inquilino';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private inquilino : Inquilino = new Inquilino();
  private titulo : string = "Crear Inquilino";

  constructor(private inquilinoService : InquilinoService, private route : Router, private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.cargarInquilino();
  }

  public cargarInquilino() : void{
    this.activateRoute.params.subscribe( params => {
      let id = params[`id`];
      if(id){
        this.inquilinoService.getInquilino(id).subscribe ( (inquilino) => this.inquilino = inquilino)
      }
    })

  }
  public crear() : void {
    this.inquilinoService.crearInquilino(this.inquilino).subscribe(
      inquilino => {

        this.route.navigate(['/inquilinos']);
        swal.fire('Inquilino Registrado', `inquilino ${inquilino.nombre} creado con éxito`, 'success')
      }
    );
  }
}
