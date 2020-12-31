import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../../shared/service/departamento.service';

@Component({
  selector: 'app-form',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamento: any = {};
  inquilinoId: number;

  constructor(private activatedRoute: ActivatedRoute,
    private departamentoService: DepartamentoService) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.departamentoService.getDepartamento(id).subscribe((departamento) => {
        this.departamento = departamento; 
        console.log(this.departamento)
      });
    });
  }

  ngOnInit() {
  }
}
