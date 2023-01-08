import React from 'react'

interface Props {
  songs: any
  currentSong: any
  setCurrentSong: any
  setProgress: any
  audioElementRef: any
  setIsPlaying: any
  isPlaying: any
  volume: any
  setVolume: any
  mute: any
  setMute: any
}

export const Controls = ({
  songs,
  currentSong,
  setCurrentSong,
  setProgress,
  audioElementRef,
  setIsPlaying,
  isPlaying,
  volume,
  setVolume,
  mute,
  setMute,
}: Props) => {
  const handlePlay = () => {
    setIsPlaying(!isPlaying)
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
    setProgress(0)
    audioElementRef.current.currentTime = 0
    setTimeout(() => {
      audioElementRef.current.play()
      setIsPlaying(true)
    }, 300)
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
    setProgress(0)
    audioElementRef.current.currentTime = 0
    setTimeout(() => {
      isPlaying && audioElementRef.current.play()
      setIsPlaying(true)
    }, 300)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value)

    if (audioElementRef) {
      audioElementRef.current.volume = volume / 100
    }
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
        className="ri-volume-up-fill text-white/80 hover:text-white cursor-pointer"
        onClick={() => setMute(!mute)}
      />
    )
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mt-2">
      <div className="min-w-[100px] max-w-[100px] mt-4 md:mt-0">
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
          className="ri-rewind-mini-fill p-2 transition-all duration-200 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-3xl"
          onClick={back}
        />
        {isPlaying ? (
          <i
            className="ri-pause-mini-line p-2 transition-all duration-200 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-4xl"
            onClick={() => handlePlay()}
          />
        ) : (
          <i
            className="ri-play-fill p-2 transition-all duration-200 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-4xl"
            onClick={() => handlePlay()}
          />
        )}
        <i
          className="ri-speed-mini-fill p-2 transition-all duration-200 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-3xl"
          onClick={next}
        />
      </div>
      <div className="min-w-[80px] max-w-[80px]" />
    </div>
  )
}
