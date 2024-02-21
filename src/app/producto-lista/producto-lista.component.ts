import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { InventarioService } from '../inventario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {
  productos: Producto[];
  public page:number;

  constructor(private InvetarioServicio:InventarioService,private enrutador:Router){}
  ngOnInit(){
    this.obtenerProductos();
  }
  private obtenerProductos() {
    this.InvetarioServicio.obtenerProductosLista().subscribe(
      (datos =>{
        this.productos = datos;
      })
    );
  }
  Editarproducto(id:number){
    this.enrutador.navigate(['editar-producto',id]);
  }
  Entrada(id:number){
    // alert("entra");
    this.enrutador.navigate(['agregar-stock',id,'Entrada']);
  }
  Salida(id:number){
    // alert("salida");
    this.enrutador.navigate(['agregar-stock',id,'Salida'])
  }
}
