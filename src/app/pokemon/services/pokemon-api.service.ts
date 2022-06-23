import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private readonly baseURL: string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  private getPokemons(): number[] {
    const pokemonsArr = Array.from(Array(650));
    return pokemonsArr.map((_, index) => index + 1);
  }

  public getPokemonOptions(): Observable<Pokemon[]> {
    let mixedPokemons = this.getPokemons().sort(() => Math.random() - 0.5);
    mixedPokemons = mixedPokemons.splice(0, 4)
    if (mixedPokemons.length !== 4) throw 'Pokemons must be 4';
    const [a, b, c, d] = mixedPokemons;
    return forkJoin([
      this.http.get<Pokemon>(`${this.baseURL}/${a}`),
      this.http.get<Pokemon>(`${this.baseURL}/${b}`),
      this.http.get<Pokemon>(`${this.baseURL}/${c}`),
      this.http.get<Pokemon>(`${this.baseURL}/${d}`)
    ]);
  }
}
