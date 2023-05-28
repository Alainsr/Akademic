import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { UsersService } from '../../users.service';
import { Usuario } from 'src/app/pages/personal/usuario.model';

@Component({
  selector: 'app-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.scss']
})
export class ListaPersonalComponent implements OnInit{
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['nombre', 'usuario', 'correo', 'actions'];

  constructor(
    private usersService: UsersService
  ){}

  ngOnInit(){
    this.fetchUsuarios();
  }

  fetchUsuarios(){
    this.usersService.getAllUsers()
    .subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }

  deleteUser(nombre: string){
    this.usersService.deleteUser(nombre)
    .subscribe(rta => {
      console.log(rta);
    })
  }


}
