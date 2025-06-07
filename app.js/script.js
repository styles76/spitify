let player;
const videoList = ['kYpAlkHI7iM', 'dQw4w9WgXcQ']; // Replace with any valid YouTube video IDs
let currentIndex = 0;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '200',
    width: '100%',
    videoId: videoList[currentIndex],
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  const backBtn = document.querySelector('.back');
  const playBtn = document.querySelector('.Play');
  const fwdBtn = document.querySelector('.fwd');

  playBtn.addEventListener('click', () => {
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      player.pauseVideo();
      playBtn.textContent = 'Play';
    } else {
      player.playVideo();
      playBtn.textContent = 'Pause';
    }
  });

  backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
    player.loadVideoById(videoList[currentIndex]);
    playBtn.textContent = 'Pause';
  });

  fwdBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videoList.length;
    player.loadVideoById(videoList[currentIndex]);
    playBtn.textContent = 'Pause';
  });
}
