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
  SET_SELECTED_PLAYLIST,
  SET_PLAY_FROM_LIST,
  SET_PLAYLIST_PLAY,


} = types;
// { name: "PlayList", list: [{ id: 1, title: 'test', isPlaying: false }, { id: 2, title: 'test', isPlaying: false }] },

const initialState = {
  audioTrack: { src: null, src: null },
  error: null,
  token: '',
  userName: 'anon',
  userId: '',
  playlists: ['list1', 'list2', 'list3'],
  lastPlayed: null,
  selectedPlaylist: null,
  recentlyAdded: null,
  isLoading: false,
  isPlaying: false,
  volume: .5,
  isMute: false,
  playFromList: null,
  playlistName: null,
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
        selectedPlaylist: payload
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

    case SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: payload,
      }

    case SET_PLAYLIST_PLAY:
      return {
        ...state,
        selectedPlayList: payload
      }

    default:
      return state;



  }

}




export default userReducer;
