import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provedor } from 'src/app/class/provedor';
import { InventarioService } from 'src/app/inventario.service';

@Component({
  selector: 'app-lista-provedor',
  templateUrl: './lista-provedor.component.html',
  styleUrls: ['./lista-provedor.component.css']
})
export class ListaProvedorComponent {
provedores:Provedor[];
public page:number;
constructor(private InventarioServicio:InventarioService,private enrutador:Router) {}
ngOnInit(): void{
  this.obtenerprovedores();
}

obtenerprovedores(){
  this.InventarioServicio.obtenerprovedores().subscribe(
    (datos =>{this.provedores=datos;
    console.log("Se han cargado los proveedores")}))
}
Editar(id:number){
  this.enrutador.navigate(['editar-proveedor',id]);
}
}
