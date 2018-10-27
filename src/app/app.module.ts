import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// opt in  Formular-Modul? - additional Metadata
import {FormsModule} from'@angular/forms';
// opt in http-clientModul
import { HttpClientModule } from '@angular/common/http';

// import external service
import { HeroService } from './hero.service';

// include components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    // deklariere dass FormsModule wirklich als Teil des NodeModuls geladen werden soll
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // importiere externen service als "Provider"
    HeroService,
    MessageService,
    /* ... make space for something else?*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
