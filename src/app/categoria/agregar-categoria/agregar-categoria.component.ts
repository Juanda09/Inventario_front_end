import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/class/categoria';
import { InventarioService } from 'src/app/inventario.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent {
  categoria: Categoria = new Categoria();
  Categorias:Categoria[];
  constructor(private InventarioServicio:InventarioService, private enrutador:Router){

  }
  OnSubmit(){
    this.guardarproducto();
  }
  private obtenerCategorias() {
    this.InventarioServicio.obtenerCategorias().subscribe(
      (datos =>{
        this.Categorias = datos;
      })
    );
  }
  guardarproducto(){
    this.InventarioServicio.agregarcategoria(this.categoria).subscribe({
      next:(datos) =>{
        this.obtenerCategorias();
        this.irListaCategorias();
      },
      error: (error: any)=> {console.log(error)}
    });
  }
  irListaCategorias(){
    this.enrutador.navigate(['categorias']);
  }

}
