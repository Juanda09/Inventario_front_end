import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from '../inventario.service';
import { Provedor } from '../class/provedor';

@Component({
  selector: 'app-editar-provedor',
  templateUrl: './editar-provedor.component.html',
  styleUrls: ['./editar-provedor.component.css']
})
export class EditarProvedorComponent {
  proveedor:Provedor = new Provedor();
  id:number
  fechaActualizacion: Date;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;
  constructor(private Ruta:ActivatedRoute,private InvetarioServicio:InventarioService,private enrutador:Router){ }
  ngOnInit(){
    this.id = this.Ruta.snapshot.params['id'];
    this.InvetarioServicio.obtenerprovedroporid(this.id).subscribe({
      next:(respuesta)=>{
        console.log('Respuesta servidor');
        console.log(respuesta);
        this.nombre = respuesta.nombre
        this.direccion=respuesta.direccion
        this.email=respuesta.email
        this.telefono=respuesta.telefono
        },
    });
  }
  OnSubmit(){
    console.log("Se enviaron los datos");
    this.EnviarproveedorModificadoaApi(this.nombre,this.direccion,this.email,this.telefono);

  }
  EnviarproveedorModificadoaApi(nombre: string, direccion: string, email: string, telefono: string)
  {
    this.proveedor.nombre = nombre;
    this.proveedor.fecha = new Date();
    this.proveedor.direccion = direccion;
    this.proveedor.email = email;
    this.proveedor.telefono = telefono;
    console.log("Se enviaron los datos al servidor");
    console.log(this.proveedor);
    //Aqui se debe llamar a la api para actualizar el registro de un provedor en la bd
    this.InvetarioServicio.EditarProveedor(this.id,this.proveedor).subscribe({
      next:(response)=>
      {
        if (response != "Error"){
          alert ("Registro Actualizado Correctamente");
          this.enrutador.navigate(['provedores']);
          }else{
            alert ('No se pudo actualizar el Registro')
            };
            },
            error: (error)=>{console.log(<any>error)}
            })
            }
  }
