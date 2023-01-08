import React, { useEffect, useRef, useState } from 'react'
import { songs as songsData } from './assets/mp3'
import { Player } from './components/Player'

interface Props {}

export const App = (props: Props) => {
  const [songs, setSongs] = useState(songsData)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState<any>(songsData[0])
  const audioElementRef = useRef<any>()

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

  return (
    <div>
      <audio
        src={currentSong.url}
        ref={audioElementRef}
        onTimeUpdate={onPlaying}
      />
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioElementRef={audioElementRef}
      />
    </div>
  )
}
