import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  img = 'https://picsum.photos/640/640?r=' + Math.random();
}
