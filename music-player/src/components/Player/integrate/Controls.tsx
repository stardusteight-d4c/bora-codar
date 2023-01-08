import React from 'react'

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
}: ControlsProps) => {
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
    setVolume(Number(e.target.value))
    if (audioElementRef) {
      audioElementRef.current.volume = volume / 100
    }
  }

  const volumeProps = (style: string) => {
    return {
      className: style,
      onClick: () => setMute(!mute),
    }
  }

  const rendersVolumeIcon = () => {
    return mute ? (
      <i {...volumeProps(style.volumeMuteIcon)} />
    ) : volume <= 50 ? (
      <i {...volumeProps(style.volumeDownIcon)} />
    ) : (
      <i {...volumeProps(style.volumeUpIcon)} />
    )
  }

  const rangeSliderInputProps = {
    type: 'range',
    min: '0',
    max: '100',
    value: volume,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleVolume(e),
    className: style.rangeSliderInput,
  }

  const controlsProps = (style: string, action: Function) => {
    return {
      className: style,
      onClick: () => {
        action()
      },
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.volumeContainer}>
        <div className={style.sliderVolumeContainer}>
          {rendersVolumeIcon()}
          <input {...rangeSliderInputProps} />
        </div>
      </div>

      <div className={style.musicMainControlsContainer}>
        <i {...controlsProps(style.backIcon, back)} />
        {isPlaying ? (
          <i {...controlsProps(style.pauseIcon, handlePlay)} />
        ) : (
          <i {...controlsProps(style.playIcon, handlePlay)} />
        )}
        <i {...controlsProps(style.nextIcon, next)} />
      </div>
      <div className={style.ghostDiv} />
    </div>
  )
}

const style = {
  wrapper: `flex flex-col-reverse md:flex-row items-center justify-between w-full mt-2`,
  volumeMuteIcon: `ri-volume-mute-fill text-white/80 hover:text-white cursor-pointer`,
  volumeDownIcon: `ri-volume-down-fill text-white/80 hover:text-white cursor-pointer`,
  volumeUpIcon: `ri-volume-up-fill text-white/80 hover:text-white cursor-pointer`,
  volumeContainer: `min-w-[100px] max-w-[100px] mt-4 md:mt-0`,
  sliderVolumeContainer: `sliderContainer text-2xl flex items-center justify-center gap-x-2`,
  rangeSliderInput: `rangeSlider cursor-pointer`,
  musicMainControlsContainer: `flex items-center justify-center gap-x-4`,
  backIcon: `ri-rewind-mini-fill p-2 transition-all duration-200 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-3xl`,
  pauseIcon: `ri-pause-mini-line p-2 transition-all duration-200 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-4xl`,
  playIcon: `ri-play-fill p-2 transition-all duration-200 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-4xl`,
  nextIcon: `ri-speed-mini-fill p-2 transition-all duration-200 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer text-3xl`,
  ghostDiv: `min-w-[80px] max-w-[80px]`,
}
