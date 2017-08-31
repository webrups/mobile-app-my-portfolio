import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(private storage: Storage) {
    storage.set('name', 'Steffen');

    // Or to get a key/value pair
    storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }

}
