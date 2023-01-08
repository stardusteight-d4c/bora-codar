import React, { useRef } from 'react'

interface Props {
  songs: any
  setSongs: any
  isPlaying: any
  setIsPlaying: any
  currentSong: any
  setCurrentSong: any
  audioElementRef: any
}

export const Player = ({
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElementRef,
}: Props) => {
  const progressBarElementRef = useRef<any>()

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
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

  // adicionar volume

  return (
    <div className="w-[500px] p-2 text-white flex flex-col items-center justify-center bg-gray-700 h-fit">
      <div>
        <p>{currentSong.artist}</p>
      </div>
      <div className="w-full cursor-pointer">
        <div className="flex items-center justify-between">
          <span>{formatTime(currentSong.currentTime)}</span>
          <span>{formatTime(currentSong.duration)}</span>
        </div>
        <div
          className="w-full bg-white h-2"
          onClick={(e) => checkWidth(e)}
          ref={progressBarElementRef}
        >
          <div
            style={{ width: `${currentSong.progress + '%'}` }}
            className="bg-green-400 h-2"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-2">
        <i
          className="ri-rewind-mini-fill cursor-pointer text-xl"
          onClick={back}
        />
        {isPlaying ? (
          <i
            className="ri-pause-mini-line cursor-pointer text-xl"
            onClick={handlePlay}
          />
        ) : (
          <i
            className="ri-play-fill cursor-pointer text-xl"
            onClick={handlePlay}
          />
        )}
        <i
          className="ri-speed-mini-fill cursor-pointer text-xl"
          onClick={next}
        />
      </div>
    </div>
  )
}
