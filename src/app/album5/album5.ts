import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Album } from '../model/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album5',
  imports: [CommonModule],
  templateUrl: './album5.html',
  styleUrl: './album5.css',
})
export class Album5 {
  @Input() hideDetails: boolean = false;
  @Output() imageSelected = new EventEmitter();

  defaultAlbum5:  Album = {
    id: 5,
    title: "Megan: Act II",
    artist: "Megan Thee Stallion",
    date: "October 25, 2024",
    imageUrl: "images/Act2.jpeg",
    songs: [

      {"title": "Neva Play", "duration": 157},
      {"title": "Bigger in Texas", "duration": 153}

    ]
    };
    emitAlbum() {
      this.imageSelected.emit(this.defaultAlbum5);
    }
}
