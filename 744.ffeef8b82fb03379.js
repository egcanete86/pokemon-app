"use strict";(self.webpackChunkPokemonApp=self.webpackChunkPokemonApp||[]).push([[744],{744:(L,u,i)=>{i.r(u),i.d(u,{PokemonModule:()=>U});var c=i(808),h=i(582),o=i(223),g=i(306),P=i(742),C=i(421),A=i(669),x=i(403),v=i(268),w=i(810),M=i(520);let y=(()=>{class n{constructor(e){this.http=e,this.baseURL="https://pokeapi.co/api/v2/pokemon"}getPokemons(){return Array.from(Array(650)).map((s,r)=>r+1)}getPokemonOptions(){let e=this.getPokemons().sort(()=>Math.random()-.5);if(e=e.splice(0,4),4!==e.length)throw"Pokemons must be 4";const[s,r,m,p]=e;return function _(...n){const t=(0,A.jO)(n),{args:e,keys:s}=(0,P.D)(n),r=new g.y(m=>{const{length:p}=e;if(!p)return void m.complete();const l=new Array(p);let d=p,f=p;for(let a=0;a<p;a++){let k=!1;(0,C.Xf)(e[a]).subscribe((0,x.x)(m,N=>{k||(k=!0,f--),l[a]=N},()=>d--,void 0,()=>{(!d||!k)&&(f||m.next(s?(0,w.n)(s,l):l),m.complete())}))}});return t?r.pipe((0,v.Z)(t)):r}([this.http.get(`${this.baseURL}/${s}`),this.http.get(`${this.baseURL}/${r}`),this.http.get(`${this.baseURL}/${m}`),this.http.get(`${this.baseURL}/${p}`)])}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(M.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),O=(()=>{class n{constructor(){}ngAfterContentInit(){this.imgSrc=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-pokemon-picture"]],inputs:{pokemonId:"pokemonId",showPokemon:"showPokemon"},decls:2,vars:2,consts:[[1,"pokemon-container"],["alt","pokemon",3,"src","ngClass"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0),o._UZ(1,"img",1),o.qZA()),2&e&&(o.xp6(1),o.Q6J("src",s.imgSrc,o.LSH)("ngClass",s.showPokemon?"fade-in":"hidden-pokemon"))},directives:[c.mk],styles:[".pokemon-container[_ngcontent-%COMP%]{height:200px}img[_ngcontent-%COMP%]{height:200px;user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-drag:none;-webkit-user-select:none}.hidden-pokemon[_ngcontent-%COMP%]{filter:brightness(0)}"]}),n})();function I(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"li",2),o.NdJ("click",function(){const m=o.CHM(e).$implicit;return o.oxw().SelectPokemon(m.id)}),o._uU(1),o.ALo(2,"uppercase"),o.qZA()}if(2&n){const e=t.$implicit;o.Q6J("id",e.id),o.xp6(1),o.hij(" ",o.lcZ(2,2,e.name)," ")}}let Z=(()=>{class n{constructor(){this.pokemons=[],this.selectPokemon=new o.vpe}SelectPokemon(e){this.selectPokemon.emit(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-pokemon-options"]],inputs:{pokemons:"pokemons"},outputs:{selectPokemon:"selectPokemon"},decls:3,vars:1,consts:[[1,"options-container"],[3,"id","click",4,"ngFor","ngForOf"],[3,"id","click"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0)(1,"ul"),o.YNc(2,I,3,4,"li",1),o.qZA()()),2&e&&(o.xp6(2),o.Q6J("ngForOf",s.pokemons))},directives:[c.sg],pipes:[c.gd],styles:["ul[_ngcontent-%COMP%]{list-style-type:none}li[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;border:1px solid rgba(0,0,0,.2);cursor:pointer;margin-bottom:10px;width:250px}li[_ngcontent-%COMP%]:hover{background-color:#0000000d}.options-container[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),n})();function T(n,t){1&n&&o._UZ(0,"h1")}function F(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"app-pokemon-options",5),o.NdJ("selectPokemon",function(r){return o.CHM(e),o.oxw(2).checkAnswer(r)}),o.qZA()}if(2&n){const e=o.oxw(2);o.Q6J("pokemons",e.pokemonArr)}}function J(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"div")(1,"h2",6),o._uU(2),o.ALo(3,"uppercase"),o.qZA(),o.TgZ(4,"button",7),o.NdJ("click",function(){return o.CHM(e),o.oxw(2).newGame()}),o._uU(5," Nuevo Juego "),o.qZA()()}if(2&n){const e=o.oxw(2);o.xp6(2),o.Oqu(o.lcZ(3,1,e.message))}}function b(n,t){if(1&n&&(o.TgZ(0,"h1"),o._uU(1,"\xbfQui\xe9n es este pok\xe9mon?"),o.qZA(),o._UZ(2,"app-pokemon-picture",2),o.YNc(3,F,1,1,"app-pokemon-options",3),o.YNc(4,J,6,3,"div",4)),2&n){const e=o.oxw();o.xp6(2),o.Q6J("pokemonId",e.pokemon.id)("showPokemon",e.showPokemon),o.xp6(1),o.Q6J("ngIf",!e.showAnswer),o.xp6(1),o.Q6J("ngIf",e.showAnswer)}}const S=[{path:"",component:(()=>{class n{constructor(e){this.httpService=e,this.pokemonArr=[],this.showPokemon=!1,this.showAnswer=!1,this.message=""}ngOnInit(){this.newGame()}mixPokemonArray(){this.httpService.getPokemonOptions().subscribe(e=>{this.pokemonArr=e;const s=Math.floor(4*Math.random());this.pokemon=this.pokemonArr[s]})}checkAnswer(e){!this.pokemon||(this.showPokemon=!0,this.showAnswer=!0,this.message=e===this.pokemon.id?`Correcto, ${this.pokemon.name}`:`Oops, era ${this.pokemon.name}`)}newGame(){this.showPokemon=!1,this.showAnswer=!1,this.pokemonArr=[],this.pokemon=void 0,this.mixPokemonArray()}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(y))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-main"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"pokemonId","showPokemon"],[3,"pokemons","selectPokemon",4,"ngIf"],[4,"ngIf"],[3,"pokemons","selectPokemon"],[1,"fade-in"],[3,"click"]],template:function(e,s){if(1&e&&(o.YNc(0,T,1,0,"h1",0),o.YNc(1,b,5,4,"ng-template",null,1,o.W1O)),2&e){const r=o.MAs(2);o.Q6J("ngIf",!s.pokemon)("ngIfElse",r)}},directives:[c.O5,O,Z],pipes:[c.gd],styles:[".fade-in[_ngcontent-%COMP%]{animation:fadeIn .3s;-webkit-animation:fadeIn .3s;-moz-animation:fadeIn .3s;-o-animation:fadeIn .3s;-ms-animation:fadeIn .3s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]}),n})(),children:[{path:"**",redirectTo:"pokemones"}]}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[h.Bz.forChild(S)],h.Bz]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez,$]]}),n})()}}]);