


import React from 'react';

const Playlist = ({ songs, playSong }) => {
  // Check if songs array is not defined or empty
  if (!songs || songs.length === 0) {
    return <p>.</p>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
      {/* <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Playlist</h2> */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {songs.map((song, index) => (
          <li key={index} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => playSong(song)}>
            <img src={song.cover} alt="cover" style={{ width: '40px', height: '40px', borderRadius: '5px', marginRight: '10px' }} />
            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{song.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
