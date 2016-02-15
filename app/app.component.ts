import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {FeedComponent} from './feed/feed.component';

@Component({
    selector: 'my-app',
    template: `
    <nav>
        <div class="topbar">
            <a [routerLink]="['Home']">
              Les Girard
            </a>
            <a [routerLink]="['Feed']">
                Nouvelles
            </a>
        </div>
    </nav>
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/app.css']
})

@RouteConfig([
  { //default
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  { //default
    path: '/feed',
    name: 'Feed',
    component: FeedComponent
  }
])

export class AppComponent { }
