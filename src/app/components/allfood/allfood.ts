import { Component, inject, OnInit } from '@angular/core';
import { Mainservice } from '../../services/mainservice';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cartservice } from '../../services/cartservice';
import { product } from '../../models/restaurants';

@Component({
  selector: 'app-allfood',
  imports: [CommonModule],
  templateUrl: './allfood.html',
  styleUrl: './allfood.scss',
})
export class Allfood implements OnInit {
  public mainservice = inject(Mainservice);
  private cartservice = inject(Cartservice);
  private router = inject(Router);

  add(product: product) {
    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
      this.router.navigate(['/log-in']);
      alert('please log in');
      return;
    }

    this.cartservice.addToCart(product);
  }

  ngOnInit() {
    this.mainservice.getAllFood();
  }
}
