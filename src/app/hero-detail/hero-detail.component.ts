// importiere Input symbol??
import { Component, OnInit, Input } from '@angular/core';
// import hero class
import { Hero } from '../hero';





@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
// deklariere hero als inpput property???
@Input() hero : Hero;


  constructor() { }

  ngOnInit() {
  }

}
