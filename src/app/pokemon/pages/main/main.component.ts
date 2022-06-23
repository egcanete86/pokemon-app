import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .fade-in {
      animation: fadeIn 0.3s;
      -webkit-animation: fadeIn 0.3s;
      -moz-animation: fadeIn 0.3s;
      -o-animation: fadeIn 0.3s;
      -ms-animation: fadeIn 0.3s;
      }
      @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
      
      @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }
    `
  ]
})
export class MainComponent implements OnInit {

  pokemonArr: Pokemon[] = [];
  pokemon?: Pokemon;
  showPokemon: boolean = false;
  showAnswer: boolean = false;
  message: string = '';

  constructor(private httpService: PokemonApiService) { }
  ngOnInit(): void {
    this.newGame();
  }

  mixPokemonArray() {
    this.httpService.getPokemonOptions().subscribe(pokemons => {
      this.pokemonArr = pokemons;
      const randomInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomInt];
    });
  };

  checkAnswer(selectedId: number) {
    if (!this.pokemon) return;

    this.showPokemon = true;
    this.showAnswer = true;

    if (selectedId === this.pokemon.id) {
      this.message = `Correcto, ${this.pokemon.name}`
    } else {
      this.message = `Oops, era ${this.pokemon.name}`
    }
  };

  newGame() {
    this.showPokemon = false;
    this.showAnswer = false;
    this.pokemonArr = [];
    this.pokemon = undefined;
    this.mixPokemonArray();
  }
}
