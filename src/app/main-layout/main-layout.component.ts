import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar';
import { FooterComponent } from '../components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
