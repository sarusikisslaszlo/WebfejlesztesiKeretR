import { Component, EventEmitter, Output } from '@angular/core';
import { CATEGORIES } from './../../shared/database/category.database';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent{
  categories = CATEGORIES;
  @Output() callSelectC = new EventEmitter<string>();

  constructor() { }

}
