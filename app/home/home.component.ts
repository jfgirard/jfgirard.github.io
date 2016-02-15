import {Component} from 'angular2/core';

@Component({
    selector: 'home-component',
    template: `
        <div class="text-center text-block">
          <h1>Famille Girard</h1>
          <p>Bienvenue au site familliale pour ce tenir au courant
            des dernières nouvelles et partager!
          </p>
          <h2>Annonces</h2>
        </div>
    `
})

export class HomeComponent { }
