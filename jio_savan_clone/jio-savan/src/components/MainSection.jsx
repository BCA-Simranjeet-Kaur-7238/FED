import React, { useState } from 'react';
import Player from './Player'; 
import Playlist from './Playlist';
import song1 from '../components/Songs/song1.mp3';
import song2 from '../components/Songs/song2.mp3';
import song3 from '../components/Songs/song3.mp3';
import song4 from '../components/Songs/song4.mp3';
import song5 from '../components/Songs/song5.mp3';
import song8 from '../components/Songs/song8.mp3';
import song9 from '../components/Songs/song9.mp3';

const MainSection = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playlistVisible, setPlaylistVisible] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const stopSong = () => {
    setIsPlaying(false);
  };

  const songs = [
    { src: song1, cover: '/khutti.jpg', description: 'Diljit Dosanjh - Khutti', duration: '2:12' },
    { src: song2, cover: '/lover.jpg', description: 'Diljit Dosanjh - Lover', duration: '3:07' },
    { src: song3, cover: '/goddamn.jpg', description: 'Karan Aulja - God Damn', duration: '2:47' },
    { src: song4, cover: '/bato.jpg', description: 'Raghav x Asess - Teri Bato M', duration: '2:33' },
    { src: song5, cover: '/bol.jpg', description: 'Sajjan Adeeb - Mithe Bol', duration: '3:52' },
    { src: song8, cover: '/saal.jpg', description: 'Arjan Dhillon - Kuj Saal', duration: '3:31' },
    { src: song9, cover: '/cheri.jpg', description: 'Various Artists - Cheri Cheri', duration: '3:45' },

  ];
return (
  <div style={{ display: 'flex', padding: '60px', fontFamily: 'Roboto, sans-serif' }}>
    <div style={{width: '20%', marginRight: '50px' }}>
      <button style={{
        marginTop:'35px',  
            marginBottom: '20px',
            width: '100%',
            padding: '10px',
            fontSize: '18px',
            backgroundColor: '#3BE4AE',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer', }} onClick={() => setPlaylistVisible(!playlistVisible)}>
        {playlistVisible ? 'Hide My Playlist' : 'Show My Playlist'}
      </button>
      {playlistVisible && <Playlist songs={songs} playSong={playSong} />}
    </div>
    <div style={{ width: '80%' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '40px', marginTop: '40px', fontWeight: 'bolder' }}>TRENDING NOW</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
        {songs.map((song, index) => (
          <div key={index} onClick={() => playSong(song)}>
            <img
              src={song.cover}
              alt="cover"
              style={{ width: '180px', height: '180px', cursor: 'pointer', borderRadius: '5px' }}
            />
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{song.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Player currentSong={currentSong} isPlaying={isPlaying} stopSong={stopSong} />
  </div>
);
};

export default MainSection;
