interface Music {
  artist: string
  music: string
  url: string
  cover: string
}

interface CurrentSong extends Music {
  progress?: number
  currentTime?: number
  duration?: number
}

interface PlayerProps {
  songs: Musics[]
  setSongs: React.Dispatch<React.SetStateAction<Music[]>>
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  currentSong: CurrentSong
  setCurrentSong: React.Dispatch<React.SetStateAction<CurrentSong>>
  audioElementRef: any
  mute: boolean
  setMute: React.Dispatch<React.SetStateAction<boolean>>
}

interface ProgressBarProps {
  currentSong: CurrentSong
  progressBarElementRef: any
  audioElementRef: any
  progress: number
}

interface ControlsProps {
  songs: Musics[]
  currentSong: CurrentSong
  setCurrentSong: React.Dispatch<React.SetStateAction<CurrentSong>>
  setProgress: React.Dispatch<React.SetStateAction<number>>
  audioElementRef: any
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  isPlaying: boolean
  volume: number
  setVolume: React.Dispatch<React.SetStateAction<number>>
  mute: boolean
  setMute: React.Dispatch<React.SetStateAction<boolean>>
}
