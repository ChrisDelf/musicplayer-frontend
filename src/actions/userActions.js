import { ERROR, types } from './index';


const {
  CREATE_PLAYLIST
}
  = types;




export const createPlaylist = (name) => dispatch => {



dispatch({type: CREATE_PLAYLIST, payload: name})



}
