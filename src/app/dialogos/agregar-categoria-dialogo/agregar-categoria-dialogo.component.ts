// agregar-categoria-dialogo.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/class/categoria';
import { InventarioService } from 'src/app/inventario.service';

@Component({
  selector: 'app-agregar-categoria-dialogo',
  templateUrl: './agregar-categoria-dialogo.component.html',
  styleUrls: ['./agregar-categoria-dialogo.component.css'],
})
export class AgregarCategoriaDialogoComponent implements OnInit {
  categoriaForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AgregarCategoriaDialogoComponent>,
    private fb: FormBuilder,
    private inventarioService: InventarioService
  ) {
    this.categoriaForm = this.fb.group({
      categoria: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    // Obtén los valores del formulario y construye una instancia de la clase Categoria
    const nuevaCategoria: Categoria = {
      // Asegúrate de tener propiedades correspondientes en tu clase Categoria
      categoria: this.categoriaForm.get('categoria')?.value,
      idCategoria: 0,
      fechaCreacion: new Date(),
    };

    // Guarda la nueva categoría utilizando el servicio
    this.inventarioService.agregarcategoria(nuevaCategoria).subscribe({
      next: (dato) => {
        console.log('Se agregó la categoría:', nuevaCategoria);
        this.dialogRef.close(dato);
      },
      error: (error) => {
        alert('Error al guardar la categoría');
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
