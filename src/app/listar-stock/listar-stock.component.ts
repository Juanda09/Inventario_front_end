import { Component } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { Stock } from '../class/stock';
import { Producto } from '../class/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-stock',
  templateUrl: './listar-stock.component.html',
  styleUrls: ['./listar-stock.component.css']
})
export class ListarStockComponent {
  Stocks:Stock[];
  productos:Producto[];
  idProducto:number;
  public page:number;
  constructor(private InvetarioServicio:InventarioService,private enrutador:Router){}
  ngOnInit() {
    this.cargarListaDeTodosLosStocks();
    this.cargarlistadeproductos();
    }
    cargarListaDeTodosLosStocks(){
      this.InvetarioServicio.obtenerStocks().subscribe((data)=>{
        console.log("Data", data);
        if(!Array.isArray(data)){
          alert("Error al obtener los stocks");
          }else{
            this.Stocks=data;
            };
            });
            }
    cargarlistadeproductos(){
      this.InvetarioServicio.obtenerProductosLista().subscribe((data)=>{
        this.productos = data;
        console.log(this.productos);
      })
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
