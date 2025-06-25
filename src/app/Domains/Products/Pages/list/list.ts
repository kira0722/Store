import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../Components/product/product';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

}
