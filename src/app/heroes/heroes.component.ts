// importiere angular kern-code
import { Component, OnInit } from '@angular/core';
// importiere klasse heroes
import {Hero} from '../hero'
// importiere externen Service
import { HeroService } from '../hero.service';


// importiere konstante Liste - nicht mehr gebraucht,, da nun von Service angeliefert 
// import {HEROES} from '../mock-heroes';


@Component({
  // define father element for the html-output
  selector: 'app-heroes',
  // where is the html-template
  templateUrl: './heroes.component.html',
  // where is the css-File
  styleUrls: ['./heroes.component.css']
})



// export classes to import them in any other file (module.ts) - Was passsiert bei Aufruf von HeroesComponent
export class HeroesComponent implements OnInit {





// deklariere ein Hilfsobjekt für die selektion eines Objekts
selectedHero: Hero;

// spiele HEROES-Liste IN variable  heroes
// heroes = HEROES;
  //BESSER - deklariere die property heroes mit der Liste Hero[]
  heroes: Hero[];

// add onclicklistener for every listpoint
onSelect(hero: Hero): void {
  // spiele hero-objekt in ein abhängiges selectedObjekt von Hero
  this.selectedHero = hero;
}

// Hero ist nun ein Objekt!!!
  // hero: Hero = {
  //   id:1,
  //   name:  'Windstorm'
  // }

  //Reserve the constructor for simple initialization such as wiring constructor parameters to properties - The constructor shouldn't do ANYTHING
                    // private property "heroService"
                                // wird bei der Injektion ausgespielt als "HeroService"
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  // initialize stuff here!
    // start getter for hero-list on initialization
    this.getHeroes();
  }


  // define getter-funcction - ist void funktion , da einfach Objekt geändert wird
 // getHeroes(): void {
 //    // spiele das ergebnis der getHero-Methode aus dem Hero-Service in die herioes liste hinein
 //    this.heroes = this.heroService.getHeroes();
 // }

 // getHeroes von heroes-Component macht folgendes
 getHeroes(): void {

     // ruft heroService auf
                   // holt sich das Observable
   this.heroService.getHeroes()

   // Observable.subscribe() - läd asynchron Daten und liest sie aus sobald sie vorliegen
       // subscribed
       .subscribe(
         // abhängig von dem was als heroes ausgespielt wird, wird heroes in das von der aktiven Komponente verwwaltete heroes hineingespielt
         heroes => this.heroes = heroes

         );
 }




}
