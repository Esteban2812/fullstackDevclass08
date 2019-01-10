import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormatWidth } from '@angular/common';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  group:FormGroup

  constructor() { }

  ngOnInit() {
    this.group = new FormGroup(
      {
        nombre: new FormControl(null,Validators.required),
        correo: new FormControl(null,[Validators.required,Validators.email,this.validadorCorreosEmpresariales.bind(this)]),
        contrasena: new FormControl(null,[Validators.required,Validators.minLength(4)])
      }
    )

  }

  cargarDatos(){
    this.group.setValue({
      nombre: "Alissa Milano",
      correo: "alissa.milano@jjj.jjj",
      contrasena: "1245"
    })
  }
  grabar(){
    // if(this.group.valid){
    //   alert("formulario valido")
    // }else{
    //   alert("formulario invalido")
    // }
    const datos = this.group.getRawValue()
    console.log(datos)

  }


  dominiosValidos: string[] = ["miempresa.com","area1.miempresa.com"]
  validadorCorreosEmpresariales(control: FormControl): {[p: string]:boolean}{
    if(!control || control.value) return null
    const correo = control.value
    const dominioAVerificar = correo.split("@")[1].toLowerCase()
    let encontrado = false

    this.dominiosValidos.forEach(
      dominio => {
        //interesa verificar lo que viene despues del arroba
        if(dominio==dominioAVerificar){
          encontrado = true
        }
      }
    )

    if(encontrado){
      return null
    }else{
      return {
        //el valor que retornas es un error
        correoInvalido: true
      }
    }
  }

  cargaParcial(){
    this.group.patchValue({
      
      correo:"prueba@correo.com"
      ,
      contrasena:"123456"
    })
  }

}
