import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../pages/personal/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
    constructor(private http: HttpClient){}

    getAllUsers(){
        return this.http.get<Usuario[]>('http://localhost:8080/usuarios/buscarTodos');
    }

    createUser(usuario: Usuario){
        return this.http.post('http://localhost:8080/usuarios/adicionar', usuario)
    }

    getUser(nombre: string){
        return this.http.get<Usuario>(`http://localhost:8080/usuarios/obtenerUser?nombre=${nombre}`)
    }

    updateUser(data: any){
        return this.http.put('http://localhost:8080/usuarios/actualizar', data)
    }

    deleteUser(nombre: string){
        return this.http.delete('http://localhost:8080/usuarios/borrar')
    }

}