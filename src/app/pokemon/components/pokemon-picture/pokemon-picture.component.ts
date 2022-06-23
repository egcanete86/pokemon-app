import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-pokemon-picture',
    templateUrl: './pokemon-picture.component.html',
    styles: [`
          .pokemon-container {
              height: 200px;
          }
          img {
              height: 200px;
              user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              -webkit-user-drag: none;
              -webkit-user-select: none;
          }
          .hidden-pokemon {
              filter: brightness(0);
          }
    `]
})
export class PokemonPictureComponent implements AfterContentInit {

    @Input() pokemonId?: number;
    @Input() showPokemon?: boolean;
    imgSrc?: string;

    constructor() { }

    ngAfterContentInit(): void {
        this.imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }

}
