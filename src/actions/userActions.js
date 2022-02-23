import { ERROR, types } from './index';
import axios from 'axios';


const {
  CREATE_PLAYLIST,
  START_RECENTLY_ADDED,
  SUCCESS_RECENTLY_ADDED,
  FAILURE_RECENTLY_ADDED,
  SET_ISPLAYING,
  SET_VOLUME,
  TOGGLE_MUTE,
  START_SET_AUDIO_TRACK,
  SUCCESS_SET_AUDIO_TRACK,
  FAILURE_SET_AUDIO_TRACK,
  SET_AUDIO_TRACK,
  PLAY_AUDIO,
  SET_PLAY_FROM_LIST,
  SET_SELECTED_PLAYLIST,
  SET_PLAYLIST_PLAY

}
  = types;


const api = "http://localhost:8090/api/user/";
const srcAPI = `http://localhost:8090/audio/audios/`

export const createPlaylist = (name) => dispatch => {



  dispatch({ type: CREATE_PLAYLIST, payload: name })


}

export const loadRecentlyAdded = () => dispatch => {

  dispatch({ type: START_RECENTLY_ADDED })

  axios
    .get(`${api}musiclist`)
    .then(res => {
      let songList = []
      let pId = 0
      res.data.forEach(s => {

        songList.push({ pId: pId, id: s.id, title: s.title, isPlaying: false })
        pId += 1
      })
      let tempPlayList = { name: "RecentlyAdded", list: songList }
      dispatch({ type: SUCCESS_RECENTLY_ADDED, payload: tempPlayList })
      return true
    })
    .catch(err => {

      dispatch({ type: FAILURE_RECENTLY_ADDED, payload: err })
      return false
    })
}

export const setAudioTrack = (song) => dispatch => {

  let tempSong = {
    src: `http://localhost:8090/audio/audios/${song.id}`,
    title: song.title

  }
  dispatch({ type: START_SET_AUDIO_TRACK, payload: "start" })
  dispatch({ type: SUCCESS_SET_AUDIO_TRACK, payload: tempSong })
}


export const setIsPlaying = (state) => dispatch => {
  dispatch({ type: SET_ISPLAYING, payload: state })

}

export const updatePlaylistPlay = (playlist) => dispatch => {

  dispatch({ type: SET_PLAYLIST_PLAY, payload: playlist })


}

export const setVolume = (volume) => dispatch => {
  dispatch({ type: SET_VOLUME, payload: volume })


}

export const toggleMute = (isMute) => dispatch => {
  dispatch({ type: TOGGLE_MUTE, payload: isMute })


}

export const togglePlayFromList = (data) => dispatch => {

  dispatch({ type: SET_PLAY_FROM_LIST, payload: data })
}

export const selectPlaylist = (data) => dispatch => {
  dispatch({ type: SET_SELECTED_PLAYLIST, payload: data })
}


