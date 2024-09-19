import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

//import { MainPageComponent } from './main-pages.component';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Esto siempre debe ser privado nunca publico
  //constructor( public dbzService: DbzService ) {}
  constructor( private dbzService: DbzService ) {}

    get characters(): Character[] {
      return [...this.dbzService.characters];
    }

    onDeleteCharacter( id: string ):void {
      this.dbzService.deleteCharacterById( id );
    }

    onNewCharacter( character: Character ):void {
      this.dbzService.addCharacter( character );
    }



}
