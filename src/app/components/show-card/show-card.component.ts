import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Input()
  public tvShow: Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: "",
    year: 0,
  };

  constructor(private TvShowsService : TvShowsService){
  }

  public onSelect(): void{
    this.tvShow.isSelected = !this.tvShow.isSelected
  }

  public onDeleteClick(): void {
    this.TvShowsService.delete(this.tvShow.id);
  }
}
