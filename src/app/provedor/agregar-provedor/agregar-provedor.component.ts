import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provedor } from 'src/app/class/provedor';
import { InventarioService } from 'src/app/inventario.service';

@Component({
  selector: 'app-agregar-provedor',
  templateUrl: './agregar-provedor.component.html',
  styleUrls: ['./agregar-provedor.component.css']
})
export class AgregarProvedorComponent {
  proveedor: Provedor = new Provedor(); // Inicializa una nueva instancia de Provedor
  fechaCreacion: Date;
  fechaActualizacion: Date;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;

  constructor(private inventarioServicio: InventarioService, private enrutador: Router) {}

  OnSubmit() {
    this.agregarproveedor();
  }

  agregarproveedor(): void {
    this.EnviarproveedoraApi(this.nombre, this.direccion, this.email, this.telefono);
  }

  EnviarproveedoraApi(nombre: string, direccion: string, email: string, telefono: string): void {
    this.proveedor.fechaCreacion = new Date();
    this.proveedor.fecha = new Date();
    this.proveedor.nombre = nombre;
    this.proveedor.direccion = direccion;
    this.proveedor.email = email;
    this.proveedor.telefono = telefono;

    console.log("Se asigna la fecha de creación que es: " + this.proveedor.fechaCreacion);
    console.log("Se asigna la fecha de actualización que es: " + this.proveedor.fecha);

    /*Agregando el proveedor*/
    this.inventarioServicio.agregarprovedor(this.proveedor).subscribe({
      next: (respuesta) => {
        if (respuesta != null) {
          alert("El proveedor se agregó correctamente");
          this.irListaProducto();
        } else {
          alert("No se pudo agregar el proveedor");
        }
      },
    });
  }

  irListaProducto() {
    this.enrutador.navigate(['productos']);
  }
}
