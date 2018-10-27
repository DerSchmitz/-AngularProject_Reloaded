// importiere injectable-annotation aus angular core-code
import { Injectable } from '@angular/core';
// importiere hauptklasse hero
import { Hero } from './hero';
// importiere dummy-liste
import { HEROES } from './mock-heroes';
// import "observable" als rxjs-klasse
import { Observable } from 'rxjs/Observable';
// importiere of() funktion
import { of } from 'rxjs/observable/of';
// importiere Nachbarservice MessageService
import { MessageService } from './message.service';

// folgende Klasse ist durch einen "Injectable"-decorator annotiert - das teilt Angular mit, dass die service-klassen ihrerseits durch injectable services aufgebaut sind
@Injectable()
export class HeroService {

// als Ziel des HeroServices, implementieren wir einen Getter für die Hero-List
// getHeroes(): Hero[] {
//   return HEROES;
// }

// BESSER: "Observable" von Hero-List über getfunction ausgeben!
// Observable is one of the key classes in the RxJS library.
	// Funktion getHeroes gibt ein Observable wieder - typisch für HTTP-Calls
getHeroes(): Observable<Hero[]> {
// of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

  // rufe add-funktion des message-service auf, abhängig von "this" (aktuellem Objekt)
                          // trage alle fetched heroes on die stringliste der messages ein
  this.messageService.add('Hier bitte gespeicherte Helden eintragen!');
  return of(HEROES);
}

// "service-in-service" scenario
          // initialisiere Messageservice über messageService und mache es aufrufbar
  constructor(private messageService: MessageService) { }

}
