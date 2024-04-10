async function searchTracks(query) {
    try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
            headers: {
                'x-rapidapi-key': 'd6840672cbmsh83b1afaee982ea0p1e90ffjsn03beb51e4225',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        });
        const data = await response.json();
        displayTracks(data.data);
    } catch (error) {
        console.error('Error fetching tracks:', error);
    }
}
let playlist=[];
function displayTracks(tracks) {
    const tracksList = document.getElementById('tracksList');
    tracksList.innerHTML = '';
    tracks.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('track');
        trackElement.innerHTML = `<img class="songimage" src="${track.album.cover_big}"> <p>${track.title} - ${track.artist.name}</p> <button class="addToPlaylistBtn">Add to Playlist</button>`;
        trackElement.querySelector('.addToPlaylistBtn').addEventListener('click', function () {
            addToPlaylist(track);
        });

        trackElement.addEventListener('click', function () {
            playTrack(track.preview, track);
        });
        tracksList.appendChild(trackElement);
    });
}
async function playTrack(previewUrl, track) {
    try {
        document.querySelector('.songname').innerHTML = track.title;
        document.querySelector('.songartist').innerHTML = track.artist.name;
        const list = document.querySelectorAll('.songimage');
        list[list.length - 1].src = track.album.cover_big;
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = previewUrl;
        await audioPlayer.play();
    } catch (error) {
        console.error('Error playing track:', error);
    }
}
document.getElementById('searchButton').addEventListener('click', async function () {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput !== '') {
        await searchTracks(searchInput);
    }
});
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});
// Function to add a track to the playlist
function addToPlaylist(track) {
    playlist.push(track);
    displayPlaylist();
}

// Function to display the playlist
function displayPlaylist() {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = '';
    playlist.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.classList.add('playlist-track');
        trackElement.innerHTML = `${track.title} - ${track.artist.name}`;
        playlistElement.appendChild(trackElement);
    });
}
document.getElementById('clearPlaylistButton').addEventListener('click', function() {
    playlist = []; 

    displayPlaylist();
});
