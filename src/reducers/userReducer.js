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
  selectedSong: { name: null, length: 0 },
  recentlyAdded: null,
  isLoading: false,
}


const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYLIST:
      return { ...state, playlists: payload }

    case START_RECENTLY_ADDED:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_RECENTLY_ADDED:
      return {
        ...state,
        isLoading: false,
        recentlyAdded: payload
      }
    case FAILURE_RECENTLY_ADDED:
      return {
        ...state,
        isLoading: false,
      }
    case START_SELECTED_SONG:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_SELECTED_SONG:
      return {
        ...state,
        isLoading: false,
        selectedSong: payload
      }
    case FAILURE_SELECTED_SONG:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state;



  }

}




export default userReducer;
