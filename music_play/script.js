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

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = `assets/music/${song.file}`;
  disc.src = `assets/images/${song.disc}`;
  document.querySelectorAll('.playlist li').forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
}

function playSong() {
  audio.play();
  document.getElementById('play-icon').style.display = 'none';
  document.getElementById('pause-icon').style.display = 'inline';
  playBtn.setAttribute('aria-pressed', 'true');
  disc.classList.add("rotating");
}

function pauseSong() {
  audio.pause();
  document.getElementById('play-icon').style.display = 'inline';
  document.getElementById('pause-icon').style.display = 'none';
  playBtn.setAttribute('aria-pressed', 'false');
  disc.classList.remove("rotating");
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

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

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent || 0;
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

// Build playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.setAttribute("tabindex", "0");
  li.setAttribute("aria-label", `Play ${song.title} by ${song.artist}`);
  li.innerHTML = `
    <img src="assets/images/${song.disc}" alt="Cover of ${song.title}">
    <div class="info">
      <strong>${song.title}</strong><br>
      <span>${song.artist}</span>
    </div>
  `;
  li.addEventListener("click", () => {
    songIndex = index;
    loadSong(songIndex);
    playSong();
  });
  playlist.appendChild(li);
});

// Spacebar shortcut
document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space" && document.activeElement.tagName !== 'BUTTON') {
    e.preventDefault();
    playBtn.click();
  }
});

loadSong(songIndex);