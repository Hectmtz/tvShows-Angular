import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css'
})
export class AboutPage {
  constructor(private TvShowsService : TvShowsService){
  }

  get contador(): number{
    return this.TvShowsService.contador;
  }

  public onClick(){
    this.TvShowsService.decrementa();
  }
}
