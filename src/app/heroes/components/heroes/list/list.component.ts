import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero():void {
    //this.heroNames.pop();
    //const deletedHero = this.heroNames.pop();
    //console.log({ deletedHero })
    this.deletedHero = this.heroNames.pop();
  }

}
