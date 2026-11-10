import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { Album1 } from './album1/album1';
import { Catalog } from './catalog/catalog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Album1, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project-Megan');

  selectedAlbum: any = null;
  onAlbumSelected(imageUrl: string) {
    this.selectedAlbum = imageUrl;
    };
}
