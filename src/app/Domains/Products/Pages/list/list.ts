import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Product } from '../../Components/product/product';
import { IProduct } from '../../../Shared/models/IProdcut.model';
import { Header } from "../../../Shared/components/header/header";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  
  products = signal<IProduct[]>([]);

  constructor() {
    const initProducts: IProduct[]  = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1212',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=1212',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('estamos en al padre');
    console.log(event);
  }
}
