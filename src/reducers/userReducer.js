import { types } from '../actions/index';


const initialState = {
  token: '',
  userName: 'anon',
  userId: '',
  playlist: ['list1', 'list2', 'list3']

}


const userReducer = (state = initialState, { type, payload }) => {
  


  return state;

}




export default userReducer;
