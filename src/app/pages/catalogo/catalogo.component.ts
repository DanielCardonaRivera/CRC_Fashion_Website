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
  productos = Array.from({ length: 20 }).map((_, i) => ({
    nombre: `Producto ${i + 1}`,
    precio: (Math.random() * 10000 + 10).toFixed(2),
    imagen: `assets/img/producto${(i % 5) + 1}.jpg` 
  }));
}
