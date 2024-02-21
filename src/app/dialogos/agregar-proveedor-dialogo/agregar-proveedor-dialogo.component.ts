import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Provedor } from 'src/app/class/provedor';
import { InventarioService } from 'src/app/inventario.service';
@Component({
  selector: 'app-agregar-proveedor-dialogo',
  templateUrl: './agregar-proveedor-dialogo.component.html',
  styleUrls: ['./agregar-proveedor-dialogo.component.css']
})
export class AgregarProveedorDialogoComponent {
  proveedorForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AgregarProveedorDialogoComponent>,
    private fb: FormBuilder,
    private Inventarioservicio: InventarioService
  ) {
    this.proveedorForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const nuevoProveedor:Provedor = this.proveedorForm.value;

    this.Inventarioservicio.agregarprovedor(nuevoProveedor).subscribe({
      next: (dato) => {
        console.log('Se agregó el proveedor:', nuevoProveedor);
        this.dialogRef.close(dato);
      },
      error: (error) => {
        alert('Error al guardar el proveedor');
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
