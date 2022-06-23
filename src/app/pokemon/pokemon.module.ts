import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PokemonPictureComponent } from './components/pokemon-picture/pokemon-picture.component';
import { PokemonOptionsComponent } from './components/pokemon-options/pokemon-options.component';
import { PokemonRoutingModule } from './pokemon-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    PokemonPictureComponent,
    PokemonOptionsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class PokemonModule { }
