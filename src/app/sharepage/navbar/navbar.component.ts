import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarExpanded: boolean = false;

  toggleNavbar(): void {
    this.isNavbarExpanded = !this.isNavbarExpanded;
    console.log(this.isNavbarExpanded);
    
  }

}
