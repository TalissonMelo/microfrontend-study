import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[] = [
    {
      name: 'Camiseta Angular',
      price: 79.90,
      image: 'https://picsum.photos/id/1/200/150'
    },
    {
      name: 'Caneca Programador',
      price: 49.90,
      image: 'https://picsum.photos/id/10/200/150'
    },
    {
      name: 'Mouse Gamer RGB',
      price: 129.90,
      image: 'https://picsum.photos/id/25/200/150'
    },
    {
      name: 'Teclado Mecânico',
      price: 299.00,
      image: 'https://picsum.photos/id/30/200/150'
    },
    {
      name: 'Headset Bluetooth',
      price: 199.90,
      image: 'https://picsum.photos/id/40/200/150'
    }
  ];
}
