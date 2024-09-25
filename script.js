document.addEventListener('DOMContentLoaded', function() {
    const songList = document.querySelector('.songList');
    const songBanner = document.querySelector('.songBanner');
    const progressBar = document.getElementById('myProgressBar');

    const songs = [
        { title: "Song 1", src: "song1.mp3" },
        { title: "Song 2", src: "song2.mp3" },
        { title: "Song 3", src: "song3.mp3" }
    ];

    let currentSong = 0;
    let audio = new Audio(songs[currentSong].src);

    function loadSongs() {
        songList.innerHTML = songs.map(song => `<div>${song.title}</div>`).join('');
    }

    function playSong() {
        audio.play();
        songBanner.textContent = `Playing: ${songs[currentSong].title}`;
    }

    function pauseSong() {
        audio.pause();
    }

    progressBar.addEventListener('input', function() {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    audio.addEventListener('timeupdate', function() {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });

    loadSongs();
    playSong(); // Automatically play the first song on load

    // Additional logic to play/pause and navigate between songs can be added here
});