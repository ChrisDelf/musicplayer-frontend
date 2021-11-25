import { ERROR, types } from './index';
import axios from 'axios';


const {
  CREATE_PLAYLIST,
  START_RECENTLY_ADDED,
  SUCCESS_RECENTLY_ADDED,
  FAILURE_RECENTLY_ADDED,
  START_SELECTED_SONG,
  SUCCESS_SELECTED_SONG,
  FAILURE_SELECTED_SONG,
  SET_PLAYING_TRUE,
  SET_PLAYING_FALSE
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
  let res = `http://localhost:8080/audio/audios/${id}`
  dispatch({ type: SUCCESS_SELECTED_SONG, payload: res})
}

export const setPlaying = (state) => dispatch => {
 if (state == false)
  {
    dispatch({type: SET_PLAYING_FALSE, payload: state})

  }
  else
  {
    dispatch({type: SET_PLAYING_TRUE, payload: state})
  }
}
