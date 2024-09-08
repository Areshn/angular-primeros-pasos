import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName():string {
    //return 'Hola Mundo';
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(  ):void {
    this.name = 'Spiderman';
    //this.name = newName;
    //console.log('changeHero called with name:', newName);
  }

  changeAge(  ):void {
    this.age = 17;
    //this.age = newAge;
    //console.log('changeAge called with name:', newAge);
  }

  testClick() {
    console.log('testClick called');
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45
  }

}
