
audio = new Audio();
playBtn        = document.getElementById('ap').querySelector('.ap__controls--toggle');
playSvgPath    = document.querySelector('.icon-play').querySelector('path');
playBtn.addEventListener('click', playToggle, false);

function playToggle() {
    if(audio.paused) {

      if(audio.currentTime === 0) {
        notify(playList[index].title, {
          icon: playList[index].icon,
          body: 'Now playing'
        });
      }
      audio.play();

      playBtn.classList.add('is-playing');
      playSvgPath.setAttribute('d', document.querySelector('.icon-play').getAttribute('data-pause'));
    }
    else {
      audio.pause();
      playBtn.classList.remove('is-playing');
      playSvgPath.setAttribute('d', document.querySelector('.icon-play').getAttribute('data-play'));
    }
  }

  $('.container').on("click", function () {
    $('.track__title').html($(this).data('song'));
    audio.src = $(this).data('song');
    playBtn.classList.add('is-playing');
    playSvgPath.setAttribute('d', document.querySelector('.icon-play').getAttribute('data-pause'));
    audio.play();
  })