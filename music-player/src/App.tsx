import React, { useEffect, useRef, useState } from 'react'
import { musics as musicsData } from './assets/mockData'
import { Player } from './components/Player/Player'
import Spline from '@splinetool/react-spline'

interface Props {}

export const App = (props: Props) => {
  const [songs, setSongs] = useState<Music[]>(musicsData)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentSong, setCurrentSong] = useState<CurrentSong>(musicsData[0])
  const audioElementRef: any = useRef<React.ClassAttributes<HTMLAudioElement>>()
  const [mute, setMute] = useState<boolean>(false)

  useEffect(() => {
    if (isPlaying) {
      audioElementRef.current?.play()
    } else {
      audioElementRef.current?.pause()
    }
  }, [isPlaying])

  const onPlaying = () => {
    const duration = audioElementRef.current.duration
    const currentTime = audioElementRef.current.currentTime
    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      currentTime,
      duration,
    })
  }

  const audioProps = {
    src: currentSong.url,
    ref: audioElementRef,
    onTimeUpdate: onPlaying,
    muted: mute,
  }
  const playerProps: PlayerProps = {
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
    audioElementRef,
    mute,
    setMute,
  }

  return (
    <div className={style.wrapper}>
      <div className={style.splineContainer}>
        <Spline scene="https://prod.spline.design/Aa3b9x0vwDxHyf-v/scene.splinecode" />
      </div>
      <audio {...audioProps} />
      <div>
        <Player {...playerProps} />
      </div>
    </div>
  )
}

const style = {
  wrapper: `flex items-center bg-[#181818] justify-center min-h-screen`,
  splineContainer: `hidden md:block absolute inset-0`,
}
