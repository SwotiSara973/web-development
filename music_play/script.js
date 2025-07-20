 const songs = [
  {
    title: 'Sadhai Bhari',
    artist: 'Abhaya and the Steam Injuns',
    file: 'song1.mp3',
    disc: 'disc1.png'
  },
  {
    title: 'Shaky',
    artist: 'Sanju Rathod Ft. Isha Malviya',
    file: 'song2.mp3',
    disc: 'disc2.png'
  },
  {
    title: 'Tenu Sang Rakhna',
    artist: 'Alia Bhatt, Vedang Raina',
    file: 'song3.mp3',
    disc: 'disc3.png'
  },
  {
    title: 'Uff',
    artist: 'Sushant Kc',
    file: 'song4.mp3',
    disc: 'disc4.png'
  },
  {
    title: 'Uyi Amma',
    artist: 'Vishal Mishra',
    file: 'song5.mp3',
    disc: 'disc5.png'
  },
  {
    title: 'Jun Na Heri',
    artist: 'Wangden & Sushan Ghimire',
    file: 'song6.mp3',
    disc: 'disc6.png'
  },
  {
    title: 'Suna Kaanchi',
    artist: 'Sajjan Raj Vaidya',
    file: 'song7.mp3',
    disc: 'disc7.png'
  },
  {
    title: 'Jhim Jhim Aune Aankha',
    artist: 'Ekdev Limbu',
    file: 'song8.mp3',
    disc: 'disc8.png'
  },
  {
    title: 'Pahuna',
    artist: 'Sushant Kc',
    file: 'song9.mp3',
    disc: 'disc9.png'
  },
  {
    title: 'राधा',
    artist: 'Swoopna Suman',
    file: 'song10.mp3',
    disc: 'disc10.png'
  }
];

let songIndex = 0;
const favourites = new Set();

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const audio = document.getElementById("audio");
const disc = document.getElementById("disc");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const playlist = document.getElementById("playlist");
const favToggle = document.getElementById("fav-toggle");
const favouritesList = document.getElementById("favourites-list");
const noFavsMsg = document.getElementById("no-favs-msg");

// Sidebar buttons
const btnHome = document.getElementById("btn-home");
const btnPlaylist = document.getElementById("btn-playlist");
const btnFavourites = document.getElementById("btn-favourites");
const btnLibrary = document.getElementById("btn-library");

// Screens
const homeScreen = document.getElementById("home-screen");
const playlistScreen = document.getElementById("playlist-screen");
const favouritesScreen = document.getElementById("favourites-screen");
const libraryScreen = document.getElementById("library-screen");

// Featured songs on Home screen
const featuredList = document.getElementById("featured-list");

// Load a song by index
function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = `assets/music/${song.file}`;
  disc.src = `assets/images/${song.disc}`;
  updateFavButton();
  highlightActiveSong();
}

// Play and pause
function playSong() {
  audio.play();
  playBtn.setAttribute('aria-pressed', 'true');
  document.getElementById('play-icon').style.display = 'none';
  document.getElementById('pause-icon').style.display = 'inline';
  // disc.classList.add("rotating"); // No rotation as requested
}

function pauseSong() {
  audio.pause();
  playBtn.setAttribute('aria-pressed', 'false');
  document.getElementById('play-icon').style.display = 'inline';
  document.getElementById('pause-icon').style.display = 'none';
  // disc.classList.remove("rotating");
}

// Toggle play/pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

// Next and previous song
nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
});

// Update progress bar and time
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100 || 0;
  progress.value = percent;
  updateTimeDisplay();
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function updateTimeDisplay() {
  currentTime.textContent = formatTime(audio.currentTime);
  duration.textContent = formatTime(audio.duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60) || 0;
  const seconds = Math.floor(time % 60) || 0;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Build playlist in right panel
function buildPlaylist() {
  playlist.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.setAttribute("tabindex", "0");
    li.setAttribute("aria-label", `Play ${song.title} by ${song.artist}`);
    li.innerHTML = `
      <img src="assets/images/${song.disc}" alt="Cover of ${song.title}" />
      <div class="info">
        <strong>${song.title}</strong><br />
        <span>${song.artist}</span>
      </div>
    `;
    li.addEventListener("click", () => {
      songIndex = index;
      loadSong(songIndex);
      playSong();
      showScreen('playlist');
    });
    // Keyboard accessibility: play on Enter or Space
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        songIndex = index;
        loadSong(songIndex);
        playSong();
        showScreen('playlist');
      }
    });
    playlist.appendChild(li);
  });
}

// Highlight active song in playlist
function highlightActiveSong() {
  document.querySelectorAll('.playlist-list li').forEach((li, i) => {
    li.classList.toggle('active', i === songIndex);
  });
}

// Favourite toggle
favToggle.addEventListener("click", () => {
  const currentSong = songs[songIndex];
  if (favourites.has(currentSong.file)) {
    favourites.delete(currentSong.file);
  } else {
    favourites.add(currentSong.file);
  }
  updateFavButton();
  renderFavourites();
});


// Update favorite heart button color
function updateFavButton() {
  const currentSong = songs[songIndex];
  if (favourites.has(currentSong.file)) {
    favToggle.classList.add("active");
    favToggle.setAttribute("aria-pressed", "true");
  } else {
    favToggle.classList.remove("active");
    favToggle.setAttribute("aria-pressed", "false");
  }
}

// Render favourites list
function renderFavourites() {
  favouritesList.innerHTML = "";
  if (favourites.size === 0) {
    noFavsMsg.style.display = "block";
    return;
  }
  noFavsMsg.style.display = "none";
  songs.forEach((song, i) => {
    if (favourites.has(song.file)) {
      const li = document.createElement("li");
      li.setAttribute("tabindex", "0");
      li.setAttribute("aria-label", `Play favourite song ${song.title} by ${song.artist}`);
      li.innerHTML = `
        <img src="assets/images/${song.disc}" alt="Cover of ${song.title}" />
        <div class="info">
          <strong>${song.title}</strong><br />
          <span>${song.artist}</span>
        </div>
      `;
      li.addEventListener("click", () => {
        songIndex = i;
        loadSong(songIndex);
        playSong();
        showScreen('playlist');
      });
      // Keyboard accessibility: play on Enter or Space
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          songIndex = i;
          loadSong(songIndex);
          playSong();
          showScreen('playlist');
        }
      });
      favouritesList.appendChild(li);
    }
  });
}

// Build featured songs on Home screen
function buildFeaturedSongs() {
  featuredList.innerHTML = "";
  songs.forEach((song, i) => {
    const li = document.createElement("li");
    li.setAttribute("tabindex", "0");
    li.setAttribute("aria-label", `Play featured song ${song.title} by ${song.artist}`);
    li.innerHTML = `
      <img src="assets/images/${song.disc}" alt="Cover of ${song.title}" />
      <div class="info">
        <strong>${song.title}</strong><br />
        <span>${song.artist}</span>
      </div>
    `;
    li.addEventListener("click", () => {
      songIndex = i;
      loadSong(songIndex);
      playSong();
      showScreen('playlist');
    });
    // Keyboard accessibility: play on Enter or Space
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        songIndex = i;
        loadSong(songIndex);
        playSong();
        showScreen('playlist');
      }
    });
    featuredList.appendChild(li);
  });
}

// Show the selected screen and update sidebar buttons
function showScreen(screen) {
  // Hide all screens
  homeScreen.classList.remove('active');
  playlistScreen.classList.remove('active');
  favouritesScreen.classList.remove('active');
  libraryScreen.classList.remove('active');

  // Remove active class from all buttons
  btnHome.classList.remove('active');
  btnPlaylist.classList.remove('active');
  btnFavourites.classList.remove('active');
  btnLibrary.classList.remove('active');

  // Show the requested screen and activate button
  switch(screen) {
    case 'home':
      homeScreen.classList.add('active');
      btnHome.classList.add('active');
      break;
    case 'playlist':
      playlistScreen.classList.add('active');
      btnPlaylist.classList.add('active');
      break;
    case 'favourites':
      favouritesScreen.classList.add('active');
      btnFavourites.classList.add('active');
      break;
    case 'library':
      libraryScreen.classList.add('active');
      btnLibrary.classList.add('active');
      break;
  }
}

// Sidebar button event listeners
btnHome.addEventListener('click', () => showScreen('home'));
btnPlaylist.addEventListener('click', () => showScreen('playlist'));
btnFavourites.addEventListener('click', () => {
  renderFavourites();
  showScreen('favourites');
});
btnLibrary.addEventListener('click', () => showScreen('library'));

// Keyboard spacebar play/pause shortcut (unless focus on button)
document.body.addEventListener("keydown", (e) => {
  // Space to play/pause (except on buttons)
  if (e.code === "Space" && document.activeElement.tagName !== 'BUTTON') {
    e.preventDefault();
    playBtn.click();
  }
  // Left arrow for prev
  if (e.code === "ArrowLeft") {
    e.preventDefault();
    prevBtn.click();
  }
  // Right arrow for next
  if (e.code === "ArrowRight") {
    e.preventDefault();
    nextBtn.click();
  }
});

// Allow arrow keys to scroll playlist and favourites when focused
function addArrowScroll(listElement) {
  listElement.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      listElement.scrollBy({ top: 60, behavior: 'smooth' });
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      listElement.scrollBy({ top: -60, behavior: 'smooth' });
    }
  });
}
addArrowScroll(playlist);
addArrowScroll(favouritesList);

// Initialize app
buildPlaylist();
buildFeaturedSongs();
renderFavourites();
loadSong(songIndex);
showScreen('home');