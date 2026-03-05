import { Component, inject, OnInit } from '@angular/core';
import { Mainservice } from '../../services/mainservice';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allfood',
  imports: [ CommonModule],
  templateUrl: './allfood.html',
  styleUrl: './allfood.scss',
})
export class Allfood implements OnInit {
  public mainservice = inject(Mainservice);

  ngOnInit() {
    this.mainservice.getAllFood();
  }
}
