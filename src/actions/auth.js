import { firebase, googleAuthProvider } from '../firebase/firebase';
import { LOGIN_USER, LOGOUT_USER } from './types';

export const startLogin = () => (dispatch) => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startLogout = () => (dispatch) => {
  return firebase.auth().signOut();
};

export const loginUser = (uid) => ({
  type: LOGIN_USER,
  uid,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
