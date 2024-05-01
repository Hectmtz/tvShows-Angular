import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { TvShowsService } from '../../services/tv-shows.service';
import { Show } from '../../interfaces/show.interface';
import { ShowCardComponent } from '../../components/show-card/show-card.component';
import { FormsModule } from '@angular/forms';
import { ShowsListComponent } from '../../components/shows-list/shows-list.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ShowCardComponent, FormsModule, ShowsListComponent],
  templateUrl: './crud.page.html',
  styleUrl: './crud.page.css'
})

export class crudPage {
  showId: Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: "",
    year: 0,
  };
  id: string = "";

  idReg!: number;
  titleReg: string = "";
  yearReg!: number;
  chaptersReg!: number;
  imageReg: string = "";

  idUp!: number;
  titleUp: string = "";
  yearUp!: number;
  chaptersUp!: number;
  imageUp: string = "";

  idErase !: number;

  constructor(private TvShowsService : TvShowsService){

  }

  searchById(){
    this.TvShowsService.fetchTvShow(this.id);
  }

  get tvShows(): Show[]{
    return this.TvShowsService.tvShows3;
  }

  insertTvShow(){
    this.TvShowsService.newTvShow(this.titleReg, this.yearReg, this.chaptersReg, this.imageReg, this.idReg);
  }

  updateTvShow(){
    this.TvShowsService.updateTvShow(this.titleUp, this.yearUp, this.chaptersUp, this.imageUp, this.idUp);
  }

  deleteTvShow(){
    this.TvShowsService.eraseTvShow(this.idErase);
  }
}
