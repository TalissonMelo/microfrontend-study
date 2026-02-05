import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  ngOnInit(): void {
    const data = [
      { category: 'Eletronicos', price: 10 },
      { category: 'Roupas', price: 15 },
      { category: 'Decoração', price: 5 },
      { category: 'Ferramentas', price: 20 },
      { category: 'Acessórios', price: 17 }
    ];

    const labels = data.map(v => v.category);
    const prices = data.map(v => v.price);

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'categorys Mais Vendidas',
            data: prices,
            backgroundColor: 'rgba(31, 82, 146, 0.6)'
          }
        ]
      },
      options: {
        responsive: true,
        scales:  {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
