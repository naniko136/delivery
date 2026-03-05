import { Component, inject, OnInit } from '@angular/core';
import { Mainservice } from '../../services/mainservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-all-restaurants',
  imports: [CommonModule, RouterLink],
  templateUrl: './all-restaurants.html',
  styleUrl: './all-restaurants.scss',
})
export class AllRestaurants implements OnInit{
  public mainservice = inject(Mainservice);

  getStars(rating: number): string {
    return '⭐'.repeat(Math.round(rating));
  }

  ngOnInit() {
    this.mainservice.loadAllProducts();
  }
}
