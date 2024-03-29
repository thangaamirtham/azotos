import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'angular';
  //Loader variable default true before page load
  loader = true;
  constructor(private router: Router) { 
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
                             
        this.loader = true;
   
    }
    if (event instanceof NavigationEnd) {
      setTimeout(()=>{                           
        this.loader = false;
    }, 500);
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(()=>{                           
        this.loader = true;
    }, 500);
    }
    if (event instanceof NavigationError) {
      setTimeout(()=>{                           
          this.loader = true;
      }, 500);
    }
    
  }
}

