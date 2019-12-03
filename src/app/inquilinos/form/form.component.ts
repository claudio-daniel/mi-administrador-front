import { InquilinoService } from './../inquilino.service';
import { Inquilino } from './../inquilino';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private inquilino : Inquilino = new Inquilino();
  private titulo : string = "Crear Inquilino";

  constructor(private inquilinoService : InquilinoService, private route : Router) { }

  ngOnInit() {
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
