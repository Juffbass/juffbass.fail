document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer Logic
    const countdown = document.getElementById('countdown');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    
    // Target date: June 9, 2024 22:00:00 CET
    const targetDate = new Date(Date.UTC(2024, 5, 9, 20, 0, 0)); // 22:00 CET is 20:00 UTC

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            clearInterval(interval);
            countdown.innerHTML = 'Myrkur is out now!';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysSpan.textContent = days;
        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;

        console.log('Countdown Updated:', { days, hours, minutes, seconds });
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set values immediately
});

//scrollbox
window.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.querySelector(".scroll-box");

  scrollBox.addEventListener("mouseenter", () => {
    scrollBox.style.overflowY = "auto";
  });

  scrollBox.addEventListener("mouseleave", () => {
    scrollBox.style.overflowY = "hidden";
  });
});


    // Album Popup Logic
document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.album');
    const popup = document.getElementById('album-popup');
    const popupCover = document.getElementById('popup-album-cover');
    const popupInfo = document.getElementById('popup-album-info');
    const closeBtn = document.querySelector('.close-btn');

    const albumData = {
        album1: {
            cover: 'album1.jpg',
            info: 'Detailed information about Album 1.'
        },
        album2: {
            cover: 'album2.jpg',
            info: 'Detailed information about Album 2.'
        },
        album3: {
            cover: 'album3.jpg',
            info: 'Detailed information about Album 3.'
        },
        album4: {
            cover: 'album4.jpg',
            info: 'Detailed information about Album 4.'
        },
        album5: {
            cover: 'album5.jpg',
            info: 'Detailed information about Album 5.'
        },
        album6: {
            cover: 'album6.jpg',
            info: 'Detailed information about Album 6.'
        },
    };

    albums.forEach(album => {
        album.addEventListener('click', () => {
            const albumId = album.dataset.album;
            popupCover.src = albumData[albumId].cover;
            popupInfo.textContent = albumData[albumId].info;
            popup.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
