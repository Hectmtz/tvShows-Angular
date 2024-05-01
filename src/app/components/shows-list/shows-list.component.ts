import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { ShowCardComponent } from '../show-card/show-card.component';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [NgFor, NgIf, ShowCardComponent],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {
  public objeto : any;

  @Input()
  public tvShows : Show[] = []

}
