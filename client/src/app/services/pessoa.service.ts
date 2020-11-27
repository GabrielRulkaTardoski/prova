import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService 
{
  constructor(private http: HttpClient ) { }
  BASEURL = "http://localhost:1234/";
  cadastrar(pessoa: pessoa): Observable<pessoa>{
    return this.http.post<pessoa>(this.BASEURL+"pessoa/cadastrar",pessoa);
  }
}
