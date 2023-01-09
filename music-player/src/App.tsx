import React, { useEffect, useRef, useState } from 'react'
import { Player } from './components/Player/Player'
import Spline from '@splinetool/react-spline'

interface Props {}

export const App = (props: Props) => {
  const [songs, setSongs] = useState<Music[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentSong, setCurrentSong] = useState<CurrentSong>()
  const audioElementRef: any = useRef<React.ClassAttributes<HTMLAudioElement>>()
  const [mute, setMute] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      await fetch('/musics.json')
        .then((res) => res.json())
        .then((data: Music[]) => {
          setSongs(data)
          setCurrentSong(data[0])
        })
        .catch((error) => console.log(error))
    })()
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioElementRef.current?.play()
    } else {
      audioElementRef.current?.pause()
    }
  }, [isPlaying])

  if (currentSong === null || currentSong === undefined) {
    return <></>
  }

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
  wrapper: `flex items-center bg-[#121214] justify-center min-h-screen`,
  splineContainer: `hidden md:block absolute inset-0`,
}
