import { Producto } from "./producto";
import { Provedor } from "./provedor";

export class Stock {
  idStock:number;
  producto:Producto;
  cantidad: number;
  tipo_de_stock:string;
  motivo:string;
  observacion:string;
  fechaCreacion:Date;
}
