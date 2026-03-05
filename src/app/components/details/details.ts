import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mainservice } from '../../services/mainservice';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  private route = inject(ActivatedRoute);
  public mainservice = inject(Mainservice);

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((param) => this.mainservice.getFoodByRestaurant(param.get('id')!)))
      .subscribe((data) => {
        this.mainservice.foods.set(data);
        console.log(JSON.stringify(data, null, 2));

        this.mainservice.loading.set(false);
      });
  }
}
