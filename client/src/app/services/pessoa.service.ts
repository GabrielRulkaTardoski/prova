import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService 
{
  constructor(private http: HttpClient ) { }
  BASEURL = "http://localhost:1234/";
  cadastrar(pessoa: pessoa): Observable<pessoa>{
    return this.http.post<pessoa>(this.BASEURL+"Pessoa/cadastrar",pessoa);
  }
}
