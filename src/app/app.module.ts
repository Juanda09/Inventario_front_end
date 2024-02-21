import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarCategoriaComponent } from './categoria/agregar-categoria/agregar-categoria.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListarStockComponent } from './listar-stock/listar-stock.component';
import { AgregarStockComponent } from './agregar-stock/agregar-stock.component';
import { ErrorComponent } from './error/error.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ProvedorComponent } from './provedor/provedor.component';
import { ListaProvedorComponent } from './provedor/lista-provedor/lista-provedor.component';
import { AgregarProvedorComponent } from './provedor/agregar-provedor/agregar-provedor.component';
import { EditarProvedorComponent } from './editar-provedor/editar-provedor.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AgregarCategoriaDialogoComponent } from './dialogos/agregar-categoria-dialogo/agregar-categoria-dialogo.component';
import { AgregarProveedorDialogoComponent } from './dialogos/agregar-proveedor-dialogo/agregar-proveedor-dialogo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    AgregarCategoriaComponent,
    ListarCategoriaComponent,
    AgregarProductoComponent,
    CategoriaComponent,
    ListarStockComponent,
    AgregarStockComponent,
    ErrorComponent,
    EditarProductoComponent,
    ProvedorComponent,
    ListaProvedorComponent,
    AgregarProvedorComponent,
    EditarProvedorComponent,
    AgregarProveedorDialogoComponent,
    AgregarCategoriaDialogoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
