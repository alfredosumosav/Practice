class MusicPlayer {
  constructor(playlist) {
    this.originalPlaylist = playlist;
    this.playlist = this.originalPlaylist.slice(0);
    this.isRepeating = false;
  }

  getNextTrack() {
    // if the repeating flag is true and this is the last song...
    if (this.isRepeating && this.playlist.length === 0) {
      // add the original playlist songs to the currently playing playlist
      this.playlist.push(...this.originalPlaylist);
    }
    // grab the next song
    let nextSong = this.playlist.shift();

    // if the next song exists, return it. Otherwise, return null (end of playlist)
    return !!nextSong ? nextSong : null;
  }

  previewUpcomingTracks(count) {
    // make a copy of the next count songs and return it inside a list
    // if the number of songs is less than count, return the remaining songs
    const upcomingTracks = this.playlist.slice(0, count);
    return upcomingTracks;
  }

  repeat(bool) {
    // if bool is true, flip the state of this.isRepeating
    if (!!bool) {
      this.isRepeating = !this.isRepeating;
      return this.isRepeating;
    }
    // otherwise, just return null
    return null;
  }
}

const musicPlayer1 = new MusicPlayer([
  {
    title: "Yellow",
    duration: "4:15",
    artist: "Coldplay",
    album: "Parachutes",
    released: 2000
  },
  {
    title: "Parachutes",
    duration: "0:47",
    artist: "Coldplay",
    album: "Parachutes",
    released: 2000
  },
  {
    title: "Everything's Not Lost",
    duration: "7:15",
    artist: "Coldplay",
    album: "Parachutes",
    released: 2000
  },
  {
    title: "Sparks",
    duration: "3:47",
    artist: "Coldplay",
    album: "Parachutes",
    released: 2000
  },
])

console.log(musicPlayer1);
console.log(musicPlayer1.getNextTrack());
console.log(musicPlayer1.previewUpcomingTracks(2));