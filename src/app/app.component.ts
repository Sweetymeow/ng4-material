import { Component } from '@angular/core';
// import { Http } from '@angular/http';

export class Hero{
  id: number;
  name: string;
  url: string;
}

const HEROS : Hero[] = [
    { id: 1, name: 'Tour of Heroes', url: 'https://angular.io/tutorial' },
    { id: 2, name: 'CLI Documentation', url: 'https://github.com/angular/angular-cli/wiki'},
    { id: 3, name: 'Angular blog', url: 'http://angularjs.blogspot.ca/' }
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular APP';
  heros = HEROS;
  myHero : Hero;

  constructor(){}

  onSelect( hero: Hero) : void{
    this.myHero = hero;
  }
}
