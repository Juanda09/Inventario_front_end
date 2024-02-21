import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListarStockComponent } from './listar-stock/listar-stock.component';
import { AgregarStockComponent } from './agregar-stock/agregar-stock.component';
import { ErrorComponent } from './error/error.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ProvedorComponent } from './provedor/provedor.component';
import { EditarProvedorComponent } from './editar-provedor/editar-provedor.component';



const routes: Routes = [
  {path:'productos',component:ProductoListaComponent},
  {path:'',redirectTo:'productos',pathMatch:'full'},
  {path:'agregar-prod',component:AgregarProductoComponent},
  {path:'categorias',component:CategoriaComponent},
  {path:'stock',component:ListarStockComponent},
  {path:'agregar-stock/:id/:tipo',component:AgregarStockComponent},
  {path:'editar-producto/:id',component:EditarProductoComponent},
  {path:'editar-proveedor/:id', component:EditarProvedorComponent},
  {path: 'provedores', component:ProvedorComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
