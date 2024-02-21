import { Component } from '@angular/core';
import { Categoria } from 'src/app/class/categoria';
import { InventarioService } from 'src/app/inventario.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent {
  Categorias: Categoria[];
  public page:number;
  constructor(private InvetarioServicio:InventarioService){}
  ngOnInit(){
    this.obtenerCategorias();
  }
  private obtenerCategorias() {
    this.InvetarioServicio.obtenerCategorias().subscribe(
      (datos =>{
        this.Categorias = datos;
      })
    );
  }
}
