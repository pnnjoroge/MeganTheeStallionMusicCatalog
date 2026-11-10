import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Album } from '../model/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album2',
  imports: [CommonModule],
  templateUrl: './album2.html',
  styleUrl: './album2.css',
})
export class Album2 {
  @Input() hideDetails: boolean = false;
  @Output() imageSelected = new EventEmitter();

  defaultAlbum2:  Album = {
    
    id: 2,
    title: "Good News",
    artist: "Megan Thee Stallion",
    date: "November 20, 2020",
    imageUrl: "images/Good News.jpg",
    songs: [

      {"title": "Girls in the Hood", "duration": 154},
      {"title": "Don't Stop", "duration": 172},
      {"title": "Body", "duration": 171},
      {"title": "Cry Baby", "duration": 138}

    ]
    };
    emitAlbum() {
      this.imageSelected.emit(this.defaultAlbum2);
    }
}
