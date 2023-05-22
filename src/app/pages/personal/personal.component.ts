import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { query } from '@angular/animations';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiResponse } from './apiResponse.model';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'] 
})
export class PersonalComponent implements OnInit {
  value!: string;
  control = new FormControl();
  subcadena!: string
  mensajeError!: string;
  usuarios!: ApiResponse[];
  myControl = new FormControl();
  options: string[] = ['Nombre', 'Facultad'];
  filteredOptions: Observable<string[]>;

  constructor(private http: HttpClient){
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.Observador()
    
  }

  Observador(){
    this.control.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(query=>{
      console.log(query)
      this.getUsuario(query)
    })  
  }

  getUsuario(query: string){
    const data={
      subcadena: query, 
      tipo: this.value
    };
    this.http.post('http://localhost:8080/usuarios/buscar', data).subscribe(response =>{
      this.usuarios = response as any
    }, error => {
      if (error.status === 401) {
        this.mensajeError = 'Usuario o contraseña incorrectos';
      }
    })
    

  }
}
