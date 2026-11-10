import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isErrorPage = false;

  constructor(private router: Router) {
    if (this.router.url.includes('/error')) {
      this.isErrorPage = true;
    }
  }
}