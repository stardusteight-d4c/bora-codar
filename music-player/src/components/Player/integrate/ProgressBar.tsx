import React from 'react'

export const ProgressBar = ({
  currentSong,
  progressBarElementRef,
  audioElementRef,
  progress,
}: ProgressBarProps) => {
  const handleProgress = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const width = progressBarElementRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const progress = (offset / width) * 100
    audioElementRef.current.currentTime =
      (progress / 100) * currentSong.duration!
  }

  const formatTime = (time: number) => {
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

  return (
    <div className={style.wrapper}>
      <div className={style.flexCenter}>
        <span>{formatTime(currentSong.currentTime!)}</span>
        <span>{formatTime(currentSong.duration!)}</span>
      </div>
      <div
        className={style.progressBar}
        onClick={(e) => handleProgress(e)}
        ref={progressBarElementRef}
      >
        <div
          style={{ width: `${progress + '%'}` }}
          className={style.progress}
        />
      </div>
    </div>
  )
}

const style = {
  wrapper: `w-full cursor-pointer mt-4`,
  flexCenter: `flex items-center justify-between`,
  progressBar: `w-full bg-white/30 shadow-inner shadow-black/10 h-2 overflow-hidden rounded-full`,
  progress: `bg-white h-2 rounded-full`,
}
