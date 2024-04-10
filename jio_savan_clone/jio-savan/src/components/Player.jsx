import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaRandom } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";6
const Player = ({ currentSong, isPlaying, stopSong }) => {
  const [audio, setAudio] = useState(new Audio());
  const [volume, setVolume] = useState(0.5);
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (currentSong) {
      audio.src = currentSong.src;
      audio.load();
      setAudio(audio);
      if (isPlaying) {
        audio.play();
        setIsPaused(false);
      }
    }
  }, [currentSong, isPlaying, audio]);

  
  useEffect(() => {
    audio.volume = volume;
  }, [volume, audio]);

  const playPauseHandler = () => {
    if (audio.paused) {
      audio.play();
      setIsPaused(false);
    } else {
      audio.pause();
      setIsPaused(true);
    }
  };


  const volumeChangeHandler = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const muteHandler = () => {
    audio.volume = isMuted ? volume : 0;
    setIsMuted(!isMuted);
  };

  const forwardHandler = () => {
    audio.currentTime += 10;
  };

  const backwardHandler = () => {
    audio.currentTime -= 10;
  };

  //shuffle
  const shuffleHandler = () => { };

  return (
    <div className='fixed bottom-0 right-0 left-0 bg-[#f5f5f5ff] flex flex-col items-center p-4'>
      {currentSong && (
        <div className="flex justify-between items-center mb-3 px-3">
          <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
            <img
              src={currentSong.cover}
              alt=""
              width={55}
              className="rounded-lg"
            />
            <div className="hidden lg:block">
              <span>{currentSong.description}</span>
              <p className="text-xs text-gray-800">
                Duration: {currentSong.duration}
              </p>
            </div>
          </div>

          <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">


            <FaBackward onClick={backwardHandler} className="text-gray-700 hover:text-gray-500 cursor-pointer" />
            {isPaused ? (
              <FaPlay onClick={playPauseHandler} className="text-gray-700 hover:text-gray-500 cursor-pointer" />
            ) : (
              <FaPause onClick={playPauseHandler} className="text-gray-700 hover:text-gray-500 cursor-pointer" />
            )}

            <FaForward onClick={forwardHandler} className="text-gray-700 hover:text-gray-500 cursor-pointer" />

            <FaRandom onClick={shuffleHandler} className="text-gray-700 hover:text-gray-500 cursor-pointer" />

          </div>

          <div className="flex lg:w-[30vw] justify-end items-center">
            <HiSpeakerWave onClick={muteHandler} className={`text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer ${isMuted ? 'text-red-500' : ''}`} />
            {!isMuted && (
              <input type="range" min="0" max="1" step="0.01" value={volume} onChange={volumeChangeHandler} className="text-gray-700 cursor-pointer ml-4" />
            )}

          </div>

        </div>
      )}
    </div>
  );
};

export default Player;
