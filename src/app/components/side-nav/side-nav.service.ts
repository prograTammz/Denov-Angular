import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidenav: MatSidenav;
  constructor() { }
  public setSidenav(sidenav: MatSidenav) {
      this.sidenav = sidenav;
  }

  public open() {
      return this.sidenav.open();
  }


  public close() {
      return this.sidenav.close();
  }

  public toggle(): void {
  this.sidenav.toggle();
  }
  public isOpened(): boolean{
    return this.sidenav.opened;
  }
}
