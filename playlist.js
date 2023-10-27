function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isPlaying = false;
}

function Playlist() {
  this.songsList = []
  this.currentSongIndex = 0
}

Playlist.prototype.add = function (song) {
  this.songsList.push(song)
}

Playlist.prototype.play = function () {
  if (!this.songsList.length) return 'No song to play';
  const currentSong = this.songsList[this.currentSongIndex];
  currentSong.isPlaying = true;
  return `${currentSong.title} started to play`
}

Playlist.prototype.stop = function () {
  if (!this.songsList.length) return 'No song to stop';
  const currentSong = this.songsList[this.currentSongIndex];
  currentSong.isPlaying = false;
  return `${currentSong.title} stopped`
}

Playlist.prototype.next = function () {
  let currentSong = this.stop()
  this.currentSongIndex++;
  if (this.currentSongIndex >= this.songsList.length) {
    this.currentSongIndex = 0;
  }
  return currentSong + ', ' + this.play()
}
