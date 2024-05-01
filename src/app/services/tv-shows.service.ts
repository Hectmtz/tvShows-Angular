import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  public contador: number = 1000;

  public tvShows : Show[] = [];
  public tvShows3 : Show[] = [];
  public tvShow : Show = {
    episodes: 0,
    id: 0,
    image: "",
    title: "",
    year: 0,
  };

  public tvShows2 : Show[] = this.tvShows

  constructor(private http : HttpClient) { }

  public delete(id: number): void {
    console.log("Click en eliminar tarjeta desde el servicio");
    this.tvShows = this.tvShows.filter(show => show.id !== id);
  }

  public searchByTerm( value: string ){
    this.fetchTvShows(value);
  }

  public searchById( value: string ){
    if (value) {
      console.log("Se buscará el ID " + value);
    return this.fetchTvShow(value);
    }else{
      console.log("No se coloco ninguna ID")
    }
  }

  public incrementa(): void{
    this.contador++;
  }

  public decrementa(): void{
    this.contador--;
  }

  public setAllAs(value: boolean) : void{
    this.tvShows.forEach( item => item.isSelected = value);
    console.log("Accion desde el servicio");
  }

  public invertirTvShows(): void {
    console.log("Se invierten tarjetas desde el servicio");
    this.tvShows.reverse();
  }

  public fetchTvShows(searchTerm = ""){
    this.http.get("http://localhost:8080/api/tvshows/all?searchTerm=" + searchTerm).subscribe({
      next: (response : any) => {
        this.tvShows = response.result;
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

  public fetchTvShow(id: string){
    this.http.get("http://localhost:8080/api/tvshows?id=" + id).subscribe({
      next: (response : any) => {
        this.tvShows3 = response.result;
      },
      error: (error : any) => {
        console.log(error);
      }
    })
  }

  public newTvShow(title: string, year: number, episodes: number, image: string, id: number){
    const url = "http://localhost:8080/api/tvshows";
    this.http.post(url, { title: title, year: year, episodes: episodes, image: image, id: id}).subscribe({
      next: (response: any) => {
        console.log('tvShow insertado con éxito', response);
        this.mostrarExito('TvShow insertado con éxito');
      },
      error: (error: any) => {
        console.error('Error al insertar el usuario', error);
        this.mostrarError('Error al insertar el TV show');
      }
    });
  }

  public updateTvShow(title: string, year: number, episodes: number, image: string, id: number){
    const url = "http://localhost:8080/api/tvshows/" + id;
    this.http.put(url, { title: title, year: year, episodes: episodes, image: image, id: id}).subscribe({
      next: (response: any) => {
        console.log('tvShow actualizado con éxito', response);
        this.mostrarExito('TvShow actualizado con éxito');
      },
      error: (error: any) => {
        console.error('Error al actualizar el usuario', error);
        this.mostrarError('Error al actualizado el TV show');
      }
    });
  }

  public eraseTvShow(idErase: number){
    const url = "http://localhost:8080/api/tvshows/" + idErase;
    this.http.delete(url).subscribe({
        next: (response: any) => {
            this.mostrarExito('TV show eliminado con éxito');
        },
        error: (error: any) => {
            this.mostrarError('Error al eliminar el TV show');
        }
    });
  }

  mostrarExito(msg: string) {
    var mensajeError = document.createElement("div");
    mensajeError.textContent = msg;
    mensajeError.style.backgroundColor = "red";
    mensajeError.style.color = "white";
    mensajeError.style.padding = "15px";
    mensajeError.style.position = "fixed";
    mensajeError.style.top = "20px";
    mensajeError.style.left = "50%";
    mensajeError.style.transform = "translateX(-50%)";
    mensajeError.style.borderRadius = "5px";
    mensajeError.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    mensajeError.style.zIndex = "9999";
    document.body.appendChild(mensajeError);
  
    setTimeout(function() {
      document.body.removeChild(mensajeError);
    }, 1500);
  }

  mostrarError(msg: string) {
    var mensajeError = document.createElement("div");
    mensajeError.textContent = msg;
    mensajeError.style.backgroundColor = "red";
    mensajeError.style.color = "white";
    mensajeError.style.padding = "10px";
    mensajeError.style.position = "fixed";
    mensajeError.style.top = "20px";
    mensajeError.style.left = "50%";
    mensajeError.style.transform = "translateX(-50%)";
    mensajeError.style.borderRadius = "5px";
    mensajeError.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    mensajeError.style.zIndex = "9999";
    document.body.appendChild(mensajeError);
  
    setTimeout(function() {
      document.body.removeChild(mensajeError);
    }, 1500); 
  }
}
