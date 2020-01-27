import { InquilinoService } from './inquilino.service';

import { Component, OnInit } from '@angular/core';
import { Inquilino } from './inquilino';
import swal from 'sweetalert2';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-inquilinos',
  templateUrl: './inquilinos.component.html',
  styleUrls: ['./inquilinos.component.css']
})
export class InquilinosComponent implements OnInit {

  inquilinos: Inquilino[];
  CheckboxVar:boolean;
  checked = false;
  disabled = false;
  userInfo$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  view = 'Vista mensual';
  subscriptionUserInfo: Subscription;
  subscriptionActivities: Subscription;
  loading: boolean;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'actions'];

  constructor(private inquilinoService: InquilinoService) { }

  ngOnInit() {
    this.inquilinoService.getInquilinos().subscribe(
      inquilinos => this.inquilinos = inquilinos
    );
    this.userName$.next("Claudio");
  }

  eliminar(inquilino: Inquilino) {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿está seguro?',
      text: `se eliminaran los datos del inquilino ${inquilino.nombre} ${inquilino.apellido}!` ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.inquilinos = this.inquilinos.filter(i => i !== inquilino);
        this.inquilinoService.eliminarCliente(inquilino.id).subscribe(
          response => swalWithBootstrapButtons.fire('Inquilino eliminado!', `el inquilino ${inquilino.nombre} ${inquilino.apellido} ha sido eliminado!`,'success'
        )
        
        )
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire('Cancelado', `el inquilino ${inquilino.nombre} ${inquilino.apellido} permanece registrado :)`, 'error'
        )
      }
    })
  }
}
