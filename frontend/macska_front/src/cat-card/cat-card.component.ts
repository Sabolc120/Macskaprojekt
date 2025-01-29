import { Component, Input } from '@angular/core';
import { Cats } from '../types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cat-card',
  imports: [RouterModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css'
})
export class CatCardComponent {
  @Input() cat!: Cats;
}
