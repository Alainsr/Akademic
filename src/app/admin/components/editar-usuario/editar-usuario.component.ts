import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent{
  nombre!: string;
  tipo!: string;
  valor!: string;
  user!: any;
  form!: NgForm;

  constructor(
    private usersService: UsersService,
  ){}

  onSubmit(form: NgForm) {
    console.log('se presiono el boton')
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

}
  




