// import {GET_AUTH_STATE} from './auth.type';
// import {LOAD_RESOURCES} from './auth.type';
// import {CHANGE_RESOURCES} from './auth.type';


export const initialState = {
  token: 'sk54484dd',
  name: 'userName',
  email: 'ok',
  image: '',
};


export const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {

  default:
    return state;
  }
};