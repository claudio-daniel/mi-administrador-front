import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamento';
import { DepartamentoService} from './departamento.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  imagen = false;
  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService,
              private route: Router) { }

  ngOnInit() {
    this.departamentoService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );
  }

  verMas(index: number) {
    this.route.navigate(['/departamento', this.departamentos[index].id]);
  }
}
