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
}
  = types;


const api = "http://localhost:8090/api/user/";

export const createPlaylist = (name) => dispatch => {



  dispatch({ type: CREATE_PLAYLIST, payload: name })


}

export const loadRecentlyAdded = () => dispatch => {

  dispatch({ type: START_RECENTLY_ADDED })
  axios
    .get(`${api}musiclist`)
    .then(res => {
      let songList = []
      res.data.forEach(s => { songList.push({ "id": s.id, "title": s.title, "isPlaying": false }) })
      dispatch({ type: SUCCESS_RECENTLY_ADDED, payload: songList })
      return true
    })
    .catch(err => {

      dispatch({ type: FAILURE_RECENTLY_ADDED, payload: err })
      return false
    })
}

export const setAudioTrack = (song) => dispatch => {
  dispatch({ type: START_SET_AUDIO_TRACK, payload: "start" })
  dispatch({ type: SUCCESS_SET_AUDIO_TRACK, payload: `http://localhost:8090/audio/audios/${song.id}` })
}


export const setIsPlaying = (state) => dispatch => {
  dispatch({ type: SET_ISPLAYING, payload: state })

}

export const setVolume = (volume) => dispatch => {
  dispatch({ type: SET_VOLUME, payload: volume })


}

export const toggleMute = (isMute) => dispatch => {
  dispatch({ type: TOGGLE_MUTE, payload: isMute })


}
