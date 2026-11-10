import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Album } from '../model/album.model';
import { Album1 } from '../album1/album1';
import { Album2 } from '../album2/album2';
import { Album3 } from '../album3/album3';
import { Album4 } from '../album4/album4';
import { Album5 } from '../album5/album5';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink, Album1, Album2, Album3, Album4, Album5],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  selectedAlbum: any = null;

  onAlbumSelected(albumData: any) {
    this.selectedAlbum = albumData;
  }
}

