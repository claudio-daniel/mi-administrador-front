import { InquilinoService } from '../../shared/service/inquilino.service';
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

  public inquilino: Inquilino = new Inquilino();
  public titulo: string ;
  public errores: string[] = [];
  constructor(private inquilinoService: InquilinoService, private route : Router, private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.cargarInquilino();
  }

  public cargarInquilino(): void {
    this.activateRoute.params.subscribe( params => {
      let id = params[`id`];
      if (id) { 
        this.titulo = 'Editando Plan de Mantenimiento'

        this.inquilinoService.getInquilino(id).subscribe ( (inquilino) => this.inquilino = inquilino)
      } else{
        this.titulo = 'Creando Plan de Mantenimiento';
      }
    });

  }
  public crear() : void {
    this.inquilinoService.crearInquilino(this.inquilino).subscribe(
      json => {

        console.log(json)
        this.route.navigate(['/inquilinos']);
        swal.fire('Plan de Mantenimiento Registrado', `plan ${json.inquilino.nombre} creado con éxito`, 'success')
      },
      err =>{
        this.errores = err.error.errors as string[];
        console.error('Codigo de error : ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  public actualizar() : void {
    this.inquilinoService.actualizarInquilino(this.inquilino).subscribe(
      json=> {
        console.log(json)

        this.route.navigate(['/inquilinos']);
        swal.fire('Plan de Mantenimiento Actualizado', `plan ${json.inquilino.nombre} actualizado con exito`, 'success')
      },
      err =>{
        this.errores = err.error.errors as string[];
        console.error('Codigo de error : ' + err.status);
        console.error(err.error.errors);
      }

    )
  }
}
