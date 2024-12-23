import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movies } from 'src/app/domain/catalog';

@Component({
  selector: 'bg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() movie!: Movies;
  @Output() cardClicked = new EventEmitter<Movies>();
  onCardClick() {
    this.cardClicked.emit(this.movie);
  }
}
