import { Component, Output, Input} from '@angular/core';
import { Album } from '../model/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album1',
  imports: [CommonModule],
  templateUrl: './album1.html',
  styleUrl: './album1.css',
})
export class Album1 {
  @Input() hideDetails: boolean = false;
  @Output() imageSelected = new EventEmitter();

  defaultAlbum1:  Album = {
    id: 1,
    title: "Fever",
    artist: "Megan Thee Stallion",
    date: "May 17, 2019",
    imageUrl: "images/Fever.jpeg",
    songs: [
      {title: "Sex Talk", duration: 131},
      {title: "Realer", duration: 150},
      {title: "Cash Shit", duration: 193}
    ]
    }
    emitAlbum() {
      this.imageSelected.emit(this.defaultAlbum1);
    }
  }
