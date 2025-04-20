const tracks = [
    { id: "4JHg4nNYUJQ5HULcCmI18R?utm_source=generator", title: "Lagu 1" },
    { id: "5TbzAWWc5eJaANpA9kfGCd?utm_source=generator", title: "Lagu 2" },
    { id: "213x4gsFDm04hSqIUkg88w?utm_source=generator", title: "Lagu 3" },
    { id: "5Hroj5K7vLpIG4FNCRIjbP?utm_source=generator", title: "Lagu 3" }
];

let currentIndex = 0;

const audioFrame = document.getElementById('audio-frame');
const audioTitle = document.getElementById('audio-title');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function loadTrack(index) {
    audioFrame.src = `https://open.spotify.com/embed/track/${tracks[index].id}`;
    audioTitle.textContent = tracks[index].title;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : tracks.length - 1;
    loadTrack(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < tracks.length - 1) ? currentIndex + 1 : 0;
    loadTrack(currentIndex);
});

// Load the first track on page load
loadTrack(currentIndex);
