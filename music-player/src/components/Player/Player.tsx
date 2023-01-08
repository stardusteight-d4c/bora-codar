import React, { useEffect, useRef, useState } from 'react'
import { Controls } from '../integrate/Controls'
import { ProgressBar } from '../integrate/ProgressBar'

export const Player = ({
  songs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElementRef,
  mute,
  setMute,
}: PlayerProps) => {
  const progressBarElementRef = useRef<any>()
  const [volume, setVolume] = useState<any>(50)
  const [progress, setProgress] = useState(currentSong.progress)

  useEffect(() => {
    setProgress(currentSong.progress)
  }, [currentSong.progress])

  return (
    <div className={style.wrapper}>
      <div className={style.musicInfo}>
        <img src={currentSong?.cover} className={style.coverImg} />
        <div className={style.titleContainer}>
          <h2 className={style.songName}>{currentSong.music}</h2>
          <span className={style.artist}>{currentSong.artist}</span>
        </div>
      </div>

      <ProgressBar
        currentSong={currentSong}
        progressBarElementRef={progressBarElementRef}
        audioElementRef={audioElementRef}
        progress={progress}
      />

      <Controls
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setProgress={setProgress}
        audioElementRef={audioElementRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        volume={volume}
        setVolume={setVolume}
        mute={mute}
        setMute={setMute}
      />
    </div>
  )
}

const style = {
  wrapper: `player w-screen md:min-w-[490px] max-w-[490px] p-4 md:p-[38px] rounded-md text-white flex flex-col items-center justify-center h-fit`,
  musicInfo: `flex flex-col md:flex-row items-center justify-center w-full`,
  coverImg: `w-[100px] h-[100px] mb-4 md:mb-0 rounded-lg`,
  titleContainer: `flex flex-col items-center justify-center mx-auto`,
  songName: `text-white font-bold text-2xl`,
  artist: `text-white/90 font-medium`,
}
