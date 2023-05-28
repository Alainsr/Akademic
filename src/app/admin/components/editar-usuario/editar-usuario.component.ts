import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent{
  form!: FormGroup;
  nombre!: string;
  tipo!: string;
  valor!: string;
  user!: any

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ){this.buildForm();}

  onSubmit() {
    const data = {
      usuario: this.nombre,
      tipo: this.tipo,
      valor: this.valor
    }
    this.usersService.updateUser(data).subscribe(response =>{
      this.user = response
      console.log(this.user)
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      tipo:['',[Validators.required]],
      valor:['',[Validators.required]],
      
    });
  }
  



}
