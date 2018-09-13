
audio = new Audio();
playBtn        = document.getElementById('ap').querySelector('.ap__controls--toggle');
playSvgPath    = document.querySelector('.icon-play').querySelector('path');
curTime        = document.getElementById('ap').querySelector('.track__time--current');
durTime        = document.getElementById('ap').querySelector('.track__time--duration');
playBtn.addEventListener('click', playToggle, false);
audio.addEventListener('timeupdate', timeUpdate, false);

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
  

  function timeUpdate() {
    var barlength = Math.round(audio.currentTime * (100 / audio.duration));

    var
    curMins = Math.floor(audio.currentTime / 60),
    curSecs = Math.floor(audio.currentTime - curMins * 60),
    mins = Math.floor(audio.duration / 60),
    secs = Math.floor(audio.duration - mins * 60);
    (curSecs < 10) && (curSecs = '0' + curSecs);
    (secs < 10) && (secs = '0' + secs);

    curTime.innerHTML = curMins + ':' + curSecs;
    durTime.innerHTML = mins + ':' + secs;


  }

  $('.container').on("click", function () {
    $('.track__title').html($(this).data('song'));
    $('.track__artwork').attr('src', $(this).children('img').attr('src'));
    audio.src = $(this).data('song');
    playBtn.classList.add('is-playing');
    playSvgPath.setAttribute('d', document.querySelector('.icon-play').getAttribute('data-pause'));
    audio.play();
  })
  