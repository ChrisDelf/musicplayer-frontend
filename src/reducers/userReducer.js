import { types } from '../actions/index';

const { CREATE_PLAYLIST,
  START_RECENTLY_ADDED,
  SUCCESS_RECENTLY_ADDED,
  FAILURE_RECENTLY_ADDED,
  START_SELECTED_SONG,
  SUCCESS_SELECTED_SONG,
  FAILURE_SELECTED_SONG,
  SET_ISPLAYING,
  SET_VOLUME,
  TOGGLE_MUTE,
  START_SET_AUDIO_TRACK,
  SUCCESS_SET_AUDIO_TRACK,
  FAILURE_SET_AUDIO_TRACK,
  SET_PLAY_FROM_LIST

} = types;

const initialState = {
  audioTrack: { src: null, src: null },
  error: null,
  token: '',
  userName: 'anon',
  userId: '',
  playlists: ['list1', 'list2', 'list3'],
  lastPlayed: null,
  selectedSong: { src: null, src: null },
  recentlyAdded: null,
  isLoading: false,
  isPlaying: false,
  volume: .5,
  isMute: false,
  playFromList: null,
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
    case SET_ISPLAYING:
      return {
        ...state,
        isPlaying: payload
      }
    case SET_VOLUME:
      return {
        ...state,
        volume: payload
      }
    case TOGGLE_MUTE:
      return {
        ...state,
        isMute: payload
      }

    case START_SET_AUDIO_TRACK:
      return {
        ...state,
        isLoading: true,
      }
    case SUCCESS_SET_AUDIO_TRACK:

      return {
        ...state,
        audioTrack: payload,
        isLoading: false,
      }
    case FAILURE_SET_AUDIO_TRACK:
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    case SET_PLAY_FROM_LIST:
      return {
        ...state,
        playFromList: payload,
      }

    default:
      return state;



  }

}




export default userReducer;
