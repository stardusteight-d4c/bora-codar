import React, { useEffect, useRef, useState } from 'react'
import { songs as songsData } from './assets/musics'
import { Player } from './components/Player'
import Spline from '@splinetool/react-spline';

interface Props {}

export const App = (props: Props) => {
  const [songs, setSongs] = useState(songsData)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<any>(songsData[0])
  const audioElementRef = useRef<any>()
  const [mute, setMute] = useState<boolean>(false)

  useEffect(() => {
    if (isPlaying) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
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

  //settar font-family

  return (
    <div className="flex items-center bg-[#19171a] justify-center min-h-screen">
    <Spline className='absolute inset-0' scene="https://prod.spline.design/Aa3b9x0vwDxHyf-v/scene.splinecode" />
      <audio
        src={currentSong.url}
        ref={audioElementRef}
        onTimeUpdate={onPlaying}
        muted={mute}
      />
      <div>
        <Player
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          audioElementRef={audioElementRef}
          mute={mute}
          setMute={setMute}
        />
      </div>
    </div>
  )
}
