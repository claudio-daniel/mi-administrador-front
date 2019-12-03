import { INQUILINOS } from './inquilino.json';
import { Inquilino } from './inquilino';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InquilinoService {

  private urlEndPointListar : string = "http://localhost:8080/inquilino/listarInquilinos";
  private urlEndPointCrear : string = "http://localhost:8080/inquilino/form";
  
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http : HttpClient) { }

  getInquilinos(): Observable<Inquilino[]>{
    
    return this.http.get<Inquilino[]>(this.urlEndPointListar);
  }

  crearInquilino(inquilino : Inquilino): Observable<Inquilino>{
    return this.http.post<Inquilino>(this.urlEndPointCrear, inquilino, {headers : this.httpHeaders});
  }
}
