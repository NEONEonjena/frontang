import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = "https://cdn.iconscout.com/icon/premium/png-256-thumb/home-1948668-1660480.png?f=webp&w=256";
  constructor() { }

  ngOnInit(): void {
  }

}
