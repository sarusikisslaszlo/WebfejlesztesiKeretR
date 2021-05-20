import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;
  category?= '';
  page = 'home';

  constructor() { }

  ngOnInit(): void {
    this.category = '';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event: string): void {
    this.category = event;
  }

}
