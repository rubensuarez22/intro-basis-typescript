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
    audioVolume: 0,
    songDuration: 0,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

const {song: anotherSong , songDuration: duration, details: songDetails} = audioPlayer;
const {author: songAuthor} = songDetails;
const{year: songYear} = songDetails;
// console.log ('Details', songAuthor);
// console.log(' Year: ', songYear)
// console.log('Song: ', anotherSong);
// console.log('Duration:', duration);
// console.log('Author:', author)


const [, , trunks = ' Not found']: string [] = ['Goku', 'Vegeta', 'TRUNKS'];


console.log('Personaje 3:', trunks);


export{};