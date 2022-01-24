import React from 'react';
import { render } from '@testing-library/react';
import authReducer, 
{ toggleIsFetching, setAuthUserData } from "./authReducer.js"

let state = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
}
// instead toBe i can use another method
test('toggleIsFetching true', () => {
  let action = toggleIsFetching(true)
  let newState = authReducer(state, action)
  expect(newState.isFetching).toBeTruthy();
  /*expect(newState.isFetching).toBe(true);*/
  
  action = toggleIsFetching(false)
  newState = authReducer(state, action)
  expect(newState.isFetching).toBe(false);
  /*expect(newState.isFetching).toBeFalsy();*/
});

test('setAuthUserData', () => {
  let action = setAuthUserData("userId", "email", "login")
  let newState = authReducer(state, action)
  expect(newState.userId).toBe("userId");
  expect(newState.email).toBe("email");
  expect(newState.login).toBe("login");
});