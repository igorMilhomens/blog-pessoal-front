import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTema: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token ==''){
      // alert('Sua sessão inspirou. Faça o login novamente!')
      this.router.navigate(['/entrar'])
    }

    if(environment.tipo != 'adm'){
      alert('Você precisa ser Adm para acessar essa rota')
      this.router.navigate(['/inicio'])
    }
    this.findAllTema()
  }
  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>[
      this.listaTema = resp
    ])
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert( 'tema cadastrado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
    })
  }

}
