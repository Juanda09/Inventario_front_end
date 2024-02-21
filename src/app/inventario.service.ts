import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './class/producto';
import { Categoria } from './class/categoria';
import { Stock } from './class/stock';
import { Provedor } from './class/provedor';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {


  private urlbase= "http://localhost:8080/Inventario-app/";
  headers = new HttpHeaders({'Content-Type': 'application/json' });
  constructor(private clienteHTTP:HttpClient) { }
  //Listas
  obtenerProductosLista():Observable<Producto[]>{
    return this.clienteHTTP.get<Producto[]>(this.urlbase + "productos/lista");
  }
  obtenerCategorias():Observable<Categoria[]>{
    return this.clienteHTTP.get<Categoria[]> (this.urlbase+"categoria/lista") ;
  }
  obtenerStocks():Observable<Stock[]>{
    return this.clienteHTTP.get<Stock[]>(this.urlbase+ "stock/lista")
  }
  obtenerprovedores():Observable<Provedor[]>{
    return this.clienteHTTP.get<Provedor[]>(this.urlbase+"provedor/lista")
  }
  //Consultar por id
  obtenerproductoporid(id:number):Observable<Producto>{
    return this.clienteHTTP.get <Producto> (`${this.urlbase}productos/${id}`);
  }
  obtenercategoriaid(id:number):Observable<Categoria>{
    return this.clienteHTTP.get<Categoria>(`${this.urlbase}categoria/${id}`);
  }
  obtenerprovedroporid(id:number):Observable<Provedor>{
    return this.clienteHTTP.get<Provedor>(`${this.urlbase}provedor/${id}`);
  }
  buscarproductopornombre(nombre:string):Observable<Producto[]>{
    return this.clienteHTTP.get<Producto[]>(this.urlbase + "productos/buscar?nombre="+nombre)
  }
  //Agregar
  agregarproducto(producto:Producto):Observable<Object>{
    return this.clienteHTTP.post(this.urlbase + "productos/agregar-productos", producto);
  }
  agregarcategoria(categoria:Categoria):Observable<Object>{
    return this.clienteHTTP.post(this.urlbase +"categoria/agregar-categoria", categoria);
  }
  agregarStock(stock:Stock):Observable<Object>{
    return this.clienteHTTP.post(this.urlbase+"stock/agregar-stock",stock);
  }
  agregarprovedor(provedor:Provedor):Observable<Object>{
    return this.clienteHTTP.post(this.urlbase+"provedor/agregar-provedor", provedor);
  }
  //Modificar
  Editarproducto(id:number,producto:Producto):Observable<Object>{
    return this.clienteHTTP.put(this.urlbase+"productos/Actualizar/"+id,producto);
  }
  EditarProveedor(id:number,proveedor:Provedor):Observable<Object>{
    return this.clienteHTTP.put(`${this.urlbase}provedor/Actualizar/${id}`, proveedor)
  }
}
