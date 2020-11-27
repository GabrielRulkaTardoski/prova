import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component
({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() 
  {
    nomes:String;
    cpf:String;
    idade:Number
   }

  ngOnInit(): void 
  {
  }

}
