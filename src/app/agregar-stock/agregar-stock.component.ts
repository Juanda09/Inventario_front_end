import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from '../inventario.service';
import { Stock } from '../class/stock';

@Component({
  selector: 'app-agregar-stock',
  templateUrl: './agregar-stock.component.html',
  styleUrls: ['./agregar-stock.component.css']
})
export class AgregarStockComponent {
  productos: Producto[];
  producto: Producto;
  stock:Stock;
  stockaenviar:Stock;
  tipo:string;
  idProducto: number;
  id:number;
  cantidad:number;
  Motivo:string;
  Observacion:string;
  constructor(private InvetarioServicio:InventarioService,private enrutador:Router,private Ruta:ActivatedRoute){}
  ngOnInit(){
    this.id = this.Ruta.snapshot.params['id'];
    this.tipo = this.Ruta.snapshot.params['tipo'];
    console.log(this.tipo);
    this.obtenerProducto(this.id);
    this.obtenerProductos();
  }
  private obtenerProductos() {
    this.InvetarioServicio.obtenerProductosLista().subscribe(
      (datos =>{
        this.productos = datos;
      })
    );
  }
  private obtenerProducto(id:number){
    this.InvetarioServicio.obtenerproductoporid(id).subscribe({
      next:(respuesta)=>{
        console.log('Respuesta servidor');
        console.log(respuesta);
        this.producto= respuesta;
        this.idProducto = this.producto.idProducto;
        console.log(this.idProducto);
        },
    });
  }
  OnSubmit(){
    this.Procesarstock(this.idProducto);
  }
  Procesarstock(idProducto:number):void{
    this.InvetarioServicio.obtenerproductoporid(idProducto).subscribe({
      next:(respuesta)=>{
        console.log('Respuesta servidor');
        console.log(respuesta);
        this.producto= respuesta;
        console.log(this.producto);
        this.EnviarStockaApi(this.producto,this.tipo,this.cantidad,this.Motivo,this.Observacion);
        },
    });
    console.log("Producto obtenido:")
  }
  EnviarStockaApi(producto:Producto,tipo:string,cantidad:number,motivo:string,observacion:string){
    this.stock = new Stock();
    this.stock.producto = producto;
    this.stock.tipo_de_stock = tipo;
    this.stock.cantidad = cantidad;
    this.stock.motivo = motivo;
    this.stock.observacion = observacion;
    this.stock.fechaCreacion = new Date();
    console.log(this.stock.fechaCreacion);
    this.stockaenviar = this.stock;
    console.log(this.stock);
    this.InvetarioServicio.agregarStock(this.stockaenviar).subscribe({
       next:(respuesta)=>{
        console.log(respuesta);
        alert("Se ha agregado el stock correctamente");
        this.enrutador.navigate(['stock']);
       },
       error: (error: any) => {
         console.error('Error al guardar producto', error);
       }
      }
    )
  }
  Cancelar()
  {
    this.enrutador.navigate(['stock'])
  }
}
