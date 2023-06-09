import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {
  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ){this.buildForm();}

  saveUser(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const usuario = this.form.value;
      this.usersService.createUser(usuario).subscribe(
        response => {
          const data = response as any
          console.log(response)
        }, error => {
        console.log('error')
      })
      
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      usuario:['',[Validators.required]],
      contraseña:['',[Validators.required]],
      nombre:['',[Validators.required]],
      correo:['',[Validators.required]],
      facultad:['',[Validators.required]],
      grupo:['',[Validators.required]],
      carnet:['',[Validators.required]],
      año:['',[Validators.required]],
      profesor: [false],
      admin: [false],
      estudiante: [false]
    });
  }



}
