interface AudioPlayer {
  AudioVolume: number; // 0 to 100
  songDuration: number; // in seconds
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  AudioVolume: 75,
  songDuration: 240,
  song: "Arroyito",
  details: {
    author: "Fonseca",
    year: 2011,
  },
};

// desestructuración objetos
const { AudioVolume: volume, songDuration:duration, song, details} = audioPlayer;
const { author, year } = details;
console.log({ volume, duration, song, author, year });

// desestructuración arrays
const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = dbz;
console.log({ p1, p2, p3 });

