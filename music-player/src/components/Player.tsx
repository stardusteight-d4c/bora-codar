import React, { useEffect, useRef, useState } from 'react'

interface Props {
  songs: any
  setSongs: any
  isPlaying: any
  setIsPlaying: any
  currentSong: any
  setCurrentSong: any
  audioElementRef: any
  mute: any
  setMute: any
}

export const Player = ({
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElementRef,
  mute,
  setMute,
}: Props) => {
  const progressBarElementRef = useRef<any>()
  const [volume, setVolume] = useState<any>(50)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value)
    console.log(volume)

    if (audioElementRef) {
      audioElementRef.current.volume = volume / 100
    }
  }

  const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const width = progressBarElementRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const progress = (offset / width) * 100
    audioElementRef.current.currentTime =
      (progress / 100) * currentSong.duration
  }

  const back = () => {
    const currentIndex = songs.findIndex(
      (song: any) => song.music === currentSong.music
    )
    if (currentIndex === 0) {
      setCurrentSong(songs[songs.length - 1])
    } else {
      setCurrentSong(songs[currentIndex - 1])
    }
    audioElementRef.current.currentTime = 0
  }

  const next = () => {
    const currentIndex = songs.findIndex(
      (song: any) => song.music === currentSong.music
    )
    if (currentIndex === songs.length - 1) {
      setCurrentSong(songs[0])
    } else {
      setCurrentSong(songs[currentIndex + 1])
    }
    audioElementRef.current.currentTime = 0
  }

  function formatTime(time: any) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60)
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60)

      return `${minutes}:${seconds}`
    }
    return '00:00'
  }

  function VolumeBtns() {
    return mute ? (
      <i
        className="ri-volume-mute-fill text-white/80 hover:text-white cursor-pointer"
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 50 ? (
      <i
        className="ri-volume-down-fill text-white/80 hover:text-white cursor-pointer"
        onClick={() => setMute(!mute)}
      />
    ) : (
      <i
        className='ri-volume-up-fill text-white/80 hover:text-white cursor-pointer'
        onClick={() => setMute(!mute)}
      />
    )
  }

  return (
    <div className="player  min-w-[490px] max-w-[490px] p-[38px] rounded-md text-white flex flex-col items-center justify-center h-fit">
      <div className="flex items-center justify-center w-full">
        <img
          src={currentSong?.cover}
          className="w-[100px] h-[100px] rounded-lg"
        />
        <div className="flex flex-col items-center justify-center mx-auto">
          <p className="text-white font-bold text-2xl">{currentSong.music}</p>
          <span>{currentSong.artist}</span>
        </div>
      </div>
      <div className="w-full cursor-pointer mt-4">
        <div className="flex items-center justify-between">
          <span>{formatTime(currentSong.currentTime)}</span>
          <span>{formatTime(currentSong.duration)}</span>
        </div>
        <div
          className="w-full bg-white/30 shadow-inner shadow-black/10 h-2 overflow-hidden rounded-full"
          onClick={(e) => checkWidth(e)}
          ref={progressBarElementRef}
        >
          <div
            style={{ width: `${currentSong.progress + '%'}` }}
            className="bg-white h-2 rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-2">
        <div className="min-w-[80px] max-w-[80px]">
          <div className="sliderContainer text-2xl flex items-center justify-center gap-x-2">
            {VolumeBtns()}
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => handleVolume(e)}
              className="rangeSlider cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <i
            className="ri-rewind-mini-fill cursor-pointer text-2xl"
            onClick={back}
          />
          {isPlaying ? (
            <i
              className="ri-pause-mini-line cursor-pointer text-3xl"
              onClick={handlePlay}
            />
          ) : (
            <i
              className="ri-play-fill cursor-pointer text-3xl"
              onClick={handlePlay}
            />
          )}
          <i
            className="ri-speed-mini-fill cursor-pointer text-2xl"
            onClick={next}
          />
        </div>
        <div className="min-w-[60px] max-w-[60px]" />
      </div>
    </div>
  )
}
