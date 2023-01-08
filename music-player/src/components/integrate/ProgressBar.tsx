import React from 'react'

interface Props {
  currentSong: any
  progressBarElementRef: any
  audioElementRef: any
  progress: any
}

export const ProgressBar = ({
  currentSong,
  progressBarElementRef,
  audioElementRef,
  progress,
}: Props) => {
  const checkWidth = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const width = progressBarElementRef.current.clientWidth
    const offset = e.nativeEvent.offsetX
    const progress = (offset / width) * 100
    audioElementRef.current.currentTime =
      (progress / 100) * currentSong.duration!
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

  return (
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
          style={{ width: `${progress + '%'}` }}
          className="bg-white h-2 rounded-full"
        />
      </div>
    </div>
  )
}
