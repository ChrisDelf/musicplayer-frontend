import { types } from '../actions/index';

const { CREATE_PLAYLIST } = types;

const initialState = {
  token: '',
  userName: 'anon',
  userId: '',
  playlists: ['list1', 'list2', 'list3']

}


const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PLAYLIST:
      return { ...state, playlists: payload }

   default:
      return state;



  }

}




export default userReducer;
