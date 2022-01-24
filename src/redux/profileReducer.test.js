import React from 'react';
import { render } from '@testing-library/react';
import profileReducer,
{ addPostActionCreator, deletePost, setUserProfile, setStatus } from "./profileReducer.js"

let state = {
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 0, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
    { id: 2, message: "Now the posts data in array and obj", likesCount: 23, imgSrc: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
    { id: 3, message: "Посты не захардкожены в вёрстке", likesCount: 999, imgSrc: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' }
  ],
  profile: null,
  status: ""
}

test('length of arr postData is increased', () => {
  let action = addPostActionCreator("New Post")
  let newState = profileReducer(state, action)
  expect(newState.postData).toHaveLength(4);
  /*expect(newState.postData.length).toBe(4);*/
});

test('length of arr postData is decreased', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(2);
});

test('message in postData is New Post', () => {
  let action = addPostActionCreator("New Post")
  let newState = profileReducer(state, action)
  expect(newState.postData[3].message).toBe("New Post");
});

test('setUserProfile change profile to test_Profile', () => {
  let action = setUserProfile("test_Profile")
  let newState = profileReducer(state, action)
  expect(newState.profile).toBe("test_Profile");
});

test('setStatus change status to test_Status', () => {
  let action = setStatus("test_Status")
  let newState = profileReducer(state, action)
  expect(newState.status).toBe("test_Status");
});