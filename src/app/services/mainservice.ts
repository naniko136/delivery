import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { product, Restaurant } from '../models/restaurants';

@Injectable({
  providedIn: 'root',
})
export class Mainservice {
  private api = 'https://69a6d04d2cd1d055268efb7a.mockapi.io';
  private http = inject(HttpClient);

  restaurants = signal<Restaurant[]>([]);
  foods = signal<product[]>([]);
  allFood = signal<product[]>([]);

  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  getFoodByRestaurant(id: string) {
    this.loading.set(true);

    return this.http.get<product[]>(`${this.api}/food?restaurantId=${id}`);
  }

  getAllFood() {
    this.loading.set(true);
    this.http.get<product[]>(`${this.api}/food`).subscribe({
      next: (data) => {
        this.allFood.set(data);
        console.log(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('loading allFood error');
        console.error('loading allFood  error', err);
        this.loading.set(false);
      },
    });
  }

  loadAllProducts() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Restaurant[]>(`${this.api}/restaurants`).subscribe({
      next: (data) => {
        this.restaurants.set(data);
        console.log(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('loading allRestaurant error');
        console.error('loading allRestaurant error', err);
        this.loading.set(false);
      },
    });
  }
}
