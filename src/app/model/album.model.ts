export interface Album {
  id: number;
  title: string;
  artist: string;
  date: string;
  imageUrl: string;
  songs: Song[];
}

export interface Song {
  title: string;
  duration: number; // number of seconds
}

export let defaultAlbums: Album[] = [
  {
    "id": 1,
    "title": "Taylor Swift",
    "artist": "Taylor Swift",
    "date": "October 24, 2006",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png",
    "songs": [
      { "title": "Tim McGraw", "duration": 251 },
      { "title": "Picture to Burn", "duration": 191 },
      { "title": "Teardrops on My Guitar", "duration": 195 },
      { "title": "Our Song", "duration": 245 }
    ]
  }
];
