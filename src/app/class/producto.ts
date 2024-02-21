import { Categoria } from "./categoria";
import { Provedor } from "./provedor";

export class Producto {
  idProducto:number;
  descripcion:string;
  precio: number;
  categoria:Categoria;
  provedor:Provedor;
  existencia:number;
  fecha:Date;
  fechaCreacion:Date;
}
