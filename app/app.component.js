System.register(['angular2/core', 'angular2/router', './home/home.component', './feed/feed.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, feed_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (feed_component_1_1) {
                feed_component_1 = feed_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-xs-8\">\n              <ul class=\"nav navbar-nav\">\n              <li>\n                <a class=\"navbar-link\" [routerLink]=\"['Home']\">\n                  Les Girard\n                </a>\n              </li>\n                <li>\n                  <a class=\"navbar-link\" [routerLink]=\"['Feed']\">\n                    Nouvelles\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n      </div>\n    </nav>\n    <div>\n        <router-outlet></router-outlet>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styles: ["\n      .navbar-nav,.navbar-nav > li {\n        float:left;\n      }\n      .navbar-nav{\n        margin: 7.5px -15px;\n      }\n    "]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/feed',
                            name: 'Feed',
                            component: feed_component_1.FeedComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map