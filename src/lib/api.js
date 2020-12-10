import axios from 'axios'

export function getTracks() {
  return axios.get('https://itunes.apple.com/search?term=gorillaz&entity=musicTrack&limit=200')
}