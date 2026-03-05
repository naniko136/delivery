import { Component, inject } from '@angular/core';
import { Cartservice } from '../../services/cartservice';
import { Mainservice } from '../../services/mainservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  public cartservice = inject(Cartservice);
  public mainservice = inject(Mainservice);

  cart$ = this.cartservice.cart$;

  increase(id: string) {
    this.cartservice.increasequantity(id);
  }
  decrease(id: string) {
    this.cartservice.decreasequantity(id);
  }
}
