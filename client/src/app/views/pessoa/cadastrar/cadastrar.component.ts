import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit 
{
  nomes:string;
  cpfs:string;
  idades:number
  constructor
  (
    private service: 
    PessoaService, private route: ActivatedRoute, private router: Router
  ) 
  {}
 
  pessoa:pessoa= new pessoa();

   cadastrar():void{this.pessoa.nome = this.nomes; this.pessoa.cpf = this.cpfs; this.pessoa.idade = this.idades}
   
  ngOnInit(): void 
  {

  }


}
