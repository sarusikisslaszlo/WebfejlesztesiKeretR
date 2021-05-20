import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  @Input() categories?: Category[];
  @Output() callSelectC = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
