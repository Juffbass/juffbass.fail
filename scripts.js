window.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.querySelector(".scroll-box");

  scrollBox.addEventListener("mouseenter", () => {
    scrollBox.style.overflowY = "auto";
  });

  scrollBox.addEventListener("mouseleave", () => {
    scrollBox.style.overflowY = "hidden";
  });
});

/* Popup album info*/
document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.album');
    const popup = document.getElementById('album-popup');
    const popupCover = document.getElementById('popup-album-cover');
    const popupInfo = document.getElementById('popup-album-info');
    const closeBtn = document.querySelector('.close-btn');

    const albumData = {
        album1: {
            cover: 'album1.png',
            info: 'Detailed information about Album 1.'
        },
        album2: {
            cover: 'album2.png',
            info: 'Detailed information about Album 2.'
        },
        album3: {
            cover: 'album3.png',
            info: 'Detailed information about Album 3.'
        },
        album4: {
            cover: 'album4.png',
            info: 'Detailed information about Album 4.'
        },
        album5: {
            cover: 'album5.png',
            info: 'Detailed information about Album 5.'
        },
        album6: {
            cover: 'album6.png',
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
