import { Component } from '@angular/core';
import { Producto } from '../class/producto';
import { InventarioService } from '../inventario.service';
import { Router } from '@angular/router';
import { Categoria } from '../class/categoria';
import { Provedor } from '../class/provedor';
import { AgregarCategoriaDialogoComponent } from '../dialogos/agregar-categoria-dialogo/agregar-categoria-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { AgregarProveedorDialogoComponent } from '../dialogos/agregar-proveedor-dialogo/agregar-proveedor-dialogo.component';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
  producto: Producto = new Producto();
  Categorias: Categoria[];
  id: number;
  idproveedor:number;
  Categoria: Categoria;
  Proveedor:Provedor;
  Proveedores:Provedor[];
  fecha:Date= new Date();
  fechaCreacion:Date = new Date();
  constructor(private InvetarioServicio: InventarioService, private enrutador: Router,private dialog: MatDialog) {}

  OnSubmit() {
    this.guardarproducto();
  }

  ngOnInit() {
    this.obtenerCategorias();
    this.obtenerProveedores();
  }

  private obtenerCategorias() {
    this.InvetarioServicio.obtenerCategorias().subscribe(
      (datos => {
        this.Categorias = datos;
      })
    );
  }
  private obtenerProveedores(){
    this.InvetarioServicio.obtenerprovedores().subscribe((data)=>{
      console.log("Data de proveedores", data);
      this.Proveedores=data;
      });
  }

  private guardarproducto(): void {
    if (!this.id) {
      console.error('ID no está definido');
      return;
    }
    this.InvetarioServicio.obtenerprovedroporid(this.idproveedor).subscribe(dato=>{
      this.Proveedor= dato;
      console.log(this.Proveedor);
      this.InvetarioServicio.obtenercategoriaid(this.id).subscribe(respuesta => {
        if (respuesta !== null && this.Proveedor !==null) {
          console.log('La categoria es ', respuesta);
          console.log('El proveedor es ',this.Proveedor)
          this.enviarproductoaApi(respuesta,this.Proveedor); // Pasar la respuesta directamente
        } else {
          alert('No se encontró la categoría');
        }
      });
    })
  }


  enviarproductoaApi(categoria: Categoria,proveedor:Provedor) {
    console.log('Guardando producto con categoría:', categoria);
    console.log('Producto a guardar:', this.producto);
    this.producto.categoria = categoria;
    console.log('Producto con categoría asignada:', this.producto);
    console.log("Asignando el proveedor al producto:" + proveedor);
    this.producto.provedor = proveedor;
    this.producto.fecha = this.fecha
    this.producto.fechaCreacion = this.fechaCreacion;
    console.log("Proveedor asignado ahora se enviara el producto:"+ this.producto);
    this.InvetarioServicio.agregarproducto(this.producto).subscribe({
      next: (datos) => {
        console.log('Producto guardado exitosamente', datos);
        this.irListaProductos();
      },
      error: (error: any) => {
        console.error('Error al guardar producto', error);
      }
    });
  }

  abrirDialogoAgregarCategoria():void{
    const dialogRef = this.dialog.open(AgregarCategoriaDialogoComponent, {
      width: '400px', // ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('La categoria seleccionada fue : ' +result);
      this.obtenerCategorias();
    });
  }
  abrirDialogoAgregarProvedor(){
    const dialog = this.dialog.open(AgregarProveedorDialogoComponent,{
      width: '500px',
    })
    dialog.afterClosed().subscribe((result)=>{
      if(result != undefined){
        this.Proveedores.push(result);
        console.log('El provedor agregado es:'+ result);
        }else{
          alert('Debe ingresar un provedor valido');
          }
      this.obtenerProveedores();
      })
  }
  irListaProductos() {
    this.enrutador.navigate(['productos']);
  }
}
