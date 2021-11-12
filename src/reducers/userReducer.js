import { types } from '../actions/index';

const { CREATE_PLAYLIST,
  START_RECENTLY_ADDED,
  SUCCESS_RECENTLY_ADDED,
  FAILURE_RECENTLY_ADDED,
  START_SELECTED_SONG,
  SUCCESS_SELECTED_SONG,
  FAILURE_SELECTED_SONG } = types;

const initialState = {
  token: '',
  userName: 'anon',
  userId: '',
  playlists: ['list1', 'list2', 'list3'],
  selectedSong: { name: null, length: 0 }
}


const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYLIST:
      return { ...state, playlists: payload }
  switch (type) {}
    default:
      return state;



  }

}




export default userReducer;
