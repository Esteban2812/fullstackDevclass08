import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appclas8';

  @ViewChild("f") formulario: NgForm
  graba2r(f){
    console.log(f)
  }  
  grabar(){
    if(this.formulario.valid){
      alert("formulario valido")
    }else{
      alert("formulario invalido")
    }
    console.log(this.formulario)

  }
  
  cargarDatos(){
    this.formulario.setValue({
      nombre: "Alissa Milano",
      correo: "alissa.milano@jjj.jjj",
      contrasena: "1245"
    })
  }

  cargaParcial(){
    this.formulario.form.patchValue({
      
      correo:"prueba@correo.com"
      ,
      contrasena:"123456"
    })
  }


}
