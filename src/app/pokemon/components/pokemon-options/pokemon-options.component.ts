import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-options',
  templateUrl: './pokemon-options.component.html',
  styles: [`
           ul {
                list-style-type: none;
            }
            li {
                background-color: white;
                border-radius: 5px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                cursor: pointer;
                margin-bottom: 10px;
                width: 250px;
            }
            li:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }
            .options-container {
                display: flex;
                justify-content: center;
            }
              `
  ]
})
export class PokemonOptionsComponent {

  @Input() pokemons: Pokemon[] = [];
  @Output() selectPokemon: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  SelectPokemon(id: number): void {
    this.selectPokemon.emit(id);
  }
}
