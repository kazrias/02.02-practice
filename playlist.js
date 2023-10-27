function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isPlaying = false;
}

function Playlist() {
  this.songsList = []
  this.currentSongIndex = 0
}

Playlist.prototype.add = (song) => {
  this.songsList.push(song)
}

Playlist.prototype.play = () => {
  if (!this.songsList.length) return 'No song to play'
  this.songsList[this.currentSongIndex].isPlaying = true;
}

Playlist.prototype.stop = () => {
  if (!this.songsList.length) return 'No song to stop'
  this.songsList[this.currentSongIndex].isPlaying = false;
}

Playlist.prototype.next = () => {
  this.stop()
  this.currentSongIndex++;
  if (currentSongIndex >= this.songsList.length) {
    currentSongIndex = 0;
  }
  this.play()
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started