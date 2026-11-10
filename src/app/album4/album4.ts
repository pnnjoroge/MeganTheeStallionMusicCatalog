import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Album } from '../model/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album4',
  imports: [CommonModule],
  templateUrl: './album4.html',
  styleUrl: './album4.css',
})
export class Album4 {
  @Input() hideDetails: boolean = false;
  @Output() imageSelected = new EventEmitter();

  defaultAlbum4:  Album = {
    id: 4,
    title: "Megan",
    artist: "Megan Thee Stallion",
    date: "June 28, 2024",
    imageUrl: "images/Megan.jpeg",
    songs: [

      {"title": "Cobra", "duration": 168},
      {"title": "Hiss", "duration": 192},
      {"title": "Boa", "duration": 154},
      {"title": "Mamushi", "duration": 156}

    ]
    };
    
    emitAlbum() {
      this.imageSelected.emit(this.defaultAlbum4);
    }
}
