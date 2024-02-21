import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { InventarioService} from '../inventario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../class/categoria';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  producto:Producto = new Producto();
  id:number;
  idCategoria:number;
  Categorias:Categoria[]
  fecha:Date = new Date();
  constructor(private InvetarioServicio:InventarioService,private Ruta:ActivatedRoute,private enrutador:Router){}
  ngOnInit(){
    this.id = this.Ruta.snapshot.params['id'];
    this.InvetarioServicio.obtenerproductoporid(this.id).subscribe({
      next:(respuesta)=>{
        console.log('Respuesta servidor');
        console.log(respuesta);
        this.producto= respuesta;
        this.idCategoria = this.producto.categoria.idCategoria;
        this.producto.fecha= this.fecha;
        console.log(this.idCategoria);
        },
    });
    this.obtenerCategorias();
  }
  private obtenerCategorias() {
    this.InvetarioServicio.obtenerCategorias().subscribe(
      (datos => {
        this.Categorias = datos;
      })
    );
  }
  OnSubmit(){
    this.enviarproductomodificadoaApi();
  }

  private enviarproductomodificadoaApi(): void {
    this.InvetarioServicio.Editarproducto(this.id,this.producto).subscribe({
      next: (datos) => {
        console.log('Producto guardado exitosamente', datos);
        this.irListaProductos();
      },
      error: (error: any) => {
        console.error('Error al guardar producto', error);
      }
    });
  }
  irListaProductos(){
    this.enrutador.navigate(['productos']);
  }


}
