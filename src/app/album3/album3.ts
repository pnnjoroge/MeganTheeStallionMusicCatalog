import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Album } from '../model/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album3',
  imports: [CommonModule],
  templateUrl: './album3.html',
  styleUrl: './album3.css',
})
export class Album3 {
  @Input() hideDetails: boolean = false;
  @Output() imageSelected = new EventEmitter();

  defaultAlbum3:  Album = {
    id: 3,
    title: "Traumazine",
    artist: "Megan Thee Stallion",
    date: "August 12, 2022",
    imageUrl: "images/MeganBG.jpeg",
    songs: [

      {"title": "Sweetest Pie", "duration": 201},
      {"title": "Plan B", "duration": 163},
      {"title": "Pressurelicious", "duration": 173}

    ]
    };

    emitAlbum() {
      this.imageSelected.emit(this.defaultAlbum3);
    }
}
