import { Component, Input } from '@angular/core';
import { Country } from './country'; 
import { Town } from './town'; 

@Component({
   selector: 'app-country-item',
   templateUrl: './country-item.component.html',
   styleUrls: ['./country-item.component.css'],
})
export class CountryItemComponent {
    @Input('country') country: Country = {} as Country;
}

@Component({
   selector: 'app-town-item',
   templateUrl: './town-item.component.html',
   styleUrls: ['./town-item.component.css'],
})  
export class TownItemComponent {
    @Input('town') town: Town = {} as Town;
}
  

