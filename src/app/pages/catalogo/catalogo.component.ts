import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  hover: string | null = null;
  seccionSeleccionada: 'hombres' | 'mujeres' | null = null;
  productoSeleccionado: any = null;

  productosMujer = Array.from({ length: 15 }, (_, i) => ({
    nombre: `Producto Mujer ${i + 1}`,
    descripcion: 'Estilo femenino exclusivo y moderno.',
    imagen: `assets/img/mujer${(i % 6) + 1}.jpg`,
    precio: 80000 + i * 2000
  }));

  productosHombre = Array.from({ length: 15 }, (_, i) => ({
    nombre: `Producto Hombre ${i + 1}`,
    descripcion: 'Moda masculina elegante y cómoda.',
    imagen: `assets/img/hombre${(i % 6) + 1}.jpg`,
    precio: 75000 + i * 2500
  }));

  mostrarSeccion(seccion: 'hombres' | 'mujeres') {
    this.seccionSeleccionada = seccion;
  }

  volver() {
    this.seccionSeleccionada = null;
    this.productoSeleccionado = null;
  }

  abrirDetalle(producto: any) {
    this.productoSeleccionado = producto;
  }

  cerrarDetalle() {
    this.productoSeleccionado = null;
  }

  agregarAlCarrito(producto: any) {
    alert(`"${producto.nombre}" agregado al carrito`);
    this.cerrarDetalle();
  }
}
