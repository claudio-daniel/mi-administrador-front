import { InquilinoService } from './inquilino.service';

import { Component, OnInit } from '@angular/core';
import {Inquilino} from './inquilino';

@Component({
  selector: 'app-inquilinos',
  templateUrl: './inquilinos.component.html',
  styleUrls: ['./inquilinos.component.css']
})
export class InquilinosComponent implements OnInit {

  inquilinos : Inquilino[];

  constructor(private inquilinoService:InquilinoService) { }

  ngOnInit() {
   this.inquilinoService.getInquilinos().subscribe(
     inquilinos =>  this.inquilinos = inquilinos
   );
  }

}
