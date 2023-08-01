interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Playground",
  details: {
    author: "Bea Miller",
    year: 2020,
  },
};

/* const { song: anotherSong, songDuration: duration } = audioPlayer;
const { author: authorDetails, year: yearSong } = audioPlayer.details;

console.log("Song: ", audioPlayer.song);
console.log("Duration: ", audioPlayer.songDuration);
console.log("Author: ", audioPlayer.details.author);

console.log("Song: ", anotherSong);
console.log("Duration: ", duration);
console.log("Author: ", authorDetails);
console.log("Year: ", yearSong); */


const [, , trunks = 'not found']: string[] = ['Goku', 'Vegeta'];

console.error( 'Personaje 3: ', trunks);


export {};
