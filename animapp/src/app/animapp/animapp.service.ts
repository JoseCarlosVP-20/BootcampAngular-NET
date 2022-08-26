import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animapp, Datos } from './interfaces/animapp';

@Injectable({
  providedIn: 'root',
})
export class AnimappService {
  apiKey: string = 'YXSXpQDWd0hQ9SyS0vrzu5GGLCpjRq95';
  resultados: Datos[] = [];

  constructor(private http: HttpClient) {}

  buscarGif(query: string) {
    this.http
      .get<Animapp>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        this.resultados = resp.data;
      });
  }
}
