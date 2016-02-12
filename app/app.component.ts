import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {FeedComponent} from './feed/feed.component';

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="row">
            <div class="col-xs-8">
              <ul class="nav navbar-nav">
              <li>
                <a class="navbar-link" [routerLink]="['Home']">
                  Les Girard
                </a>
              </li>
                <li>
                  <a class="navbar-link" [routerLink]="['Feed']">
                    Nouvelles
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
      .navbar-nav,.navbar-nav > li {
        float:left;
      }
      .navbar-nav{
        margin: 7.5px -15px;
      }
    `]
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
