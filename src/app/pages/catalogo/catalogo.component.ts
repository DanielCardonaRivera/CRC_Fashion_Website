// Importamos lo necesario desde Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declaramos el componente usando el decorador @Component
@Component({
  selector: 'app-catalogo', // Nombre del componente en HTML
  standalone: true,         // Este componente es standalone (no necesita ser declarado en un módulo)
  imports: [CommonModule],  // Importamos CommonModule para usar directivas como *ngIf, *ngFor, etc.
  templateUrl: './catalogo.component.html', // Archivo HTML con la vista del componente
  styleUrls: ['./catalogo.component.css']   // Estilos del componente
})
export class CatalogoComponent {
  // Variable para saber en qué producto está el mouse (hover)
  hover: string | null = null;

  // Esta variable indica si el usuario está viendo la sección de hombres o de mujeres
  seccionSeleccionada: 'hombres' | 'mujeres' | null = null;

  // Guarda el producto que el usuario seleccionó para ver su detalle
  productoSeleccionado: any = null;

  // Lista de productos para  mujeres (simulada con datos de ejemplo)
  productosMujer = Array.from({ length: 15 }, (_, i) => ({
    nombre: `Producto Mujer ${i + 1}`,
    descripcion: 'Estilo femenino exclusivo y moderno.',
    imagen: `assets/img/mujer${(i % 6) + 1}.jpg`, // Usa imágenes numeradas del 1 al 6
    precio: 80000 + i * 2000
  }));

  // Lista de productos para hombres (también simulada)
  productosHombre = Array.from({ length: 15 }, (_, i) => ({
    nombre: `Producto Hombre ${i + 1}`,
    descripcion: 'Moda masculina elegante y cómoda.',
    imagen: `assets/img/hombre${(i % 6) + 1}.jpg`,
    precio: 75000 + i * 2500
  }));

  // Esta función cambia la sección que se está mostrando (hombres o mujeres)
  mostrarSeccion(seccion: 'hombres' | 'mujeres') {
    this.seccionSeleccionada = seccion;
  }

  // Regresa a la vista principal, quitando la selección de sección o producto
  volver() {
    this.seccionSeleccionada = null;
    this.productoSeleccionado = null;
  }

  // Abre el detalle de un producto cuando el usuario da clic
  abrirDetalle(producto: any) {
    this.productoSeleccionado = producto;
  }

  // Cierra el detalle del producto
  cerrarDetalle() {
    this.productoSeleccionado = null;
  }

  // Simula agregar un producto al carrito mostrando una alerta
  agregarAlCarrito(producto: any) {
    alert(`"${producto.nombre}" agregado al carrito`);
    this.cerrarDetalle(); // Cierra el detalle después de agregar al carrito
  }
}
