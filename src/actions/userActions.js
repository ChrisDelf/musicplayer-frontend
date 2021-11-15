import { ERROR, types } from './index';
import axios from 'axios';


const {
  CREATE_PLAYLIST,
  START_RECENTLY_ADDED,
  SUCCESS_RECENTLY_ADDED,
  FAILURE_RECENTLY_ADDED,
  START_SELECTED_SONG,
  SUCCESS_SELECTED_SONG,
  FAILURE_SELECTED_SONG
}
  = types;


const api = "http://localhost:8080/api/user/";

export const createPlaylist = (name) => dispatch => {



  dispatch({ type: CREATE_PLAYLIST, payload: name })


}

export const loadRecentlyAdded = () => dispatch => {

  dispatch({ type: START_RECENTLY_ADDED })
  
  axios
    .get(`${api}musiclist`)
    .then(res => {
      dispatch({ type: SUCCESS_RECENTLY_ADDED, payload: res.data })
      return true
    })
    .catch(err => {
      dispatch({ type: FAILURE_RECENTLY_ADDED, payload: err })
      return false
    })
}

export const playSelectedSong = (id) => dispatch => {
  dispatch({ type: START_SELECTED_SONG })

  axios
    .get(`http://localhost:8080/audio/audios/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: SUCCESS_SELECTED_SONG, payload: res.data })

    })
    .catch(err => {
      dispatch({ type: FAILURE_SELECTED_SONG, payload: err })
    })
}
