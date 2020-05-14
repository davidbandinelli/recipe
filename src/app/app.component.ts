import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging-service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>,
              private loggingService: LoggingService,
              @Inject(PLATFORM_ID) private platformId) {}

  ngOnInit() {
    // used only with Angular Universal if hosted on Node.js server side
    // (localStorage is only available in browsers)
    // build for Angular Universal: npm run build:ssr .... npm run serve:ssr
    // nest.js ... server side version of Angular
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthActions.AutoLogin());
    }
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
