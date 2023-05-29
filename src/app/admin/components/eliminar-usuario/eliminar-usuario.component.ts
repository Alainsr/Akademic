import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent {
  nombre!: string;
  form!: NgForm;

  constructor(
    private usersService: UsersService,
  ){}

  onSubmit(form: NgForm) {
    console.log(this.nombre)
    this.usersService.deleteUser(this.nombre).subscribe()
  }

}

