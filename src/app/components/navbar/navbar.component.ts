import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = "https://angular.gallerycdn.vsassets.io/extensions/angular/ng-template/17.2.2/1707952560052/Microsoft.VisualStudio.Services.Icons.Default";

  constructor() { }

  ngOnInit(): void {
  }

}
