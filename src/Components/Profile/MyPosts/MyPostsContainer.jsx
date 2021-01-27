import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer.js';


const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator())
          /*newPostElement.current.value = ""*/
          /*props.updateNewPostText("")*/
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }
        return <MyPosts
          postData={store.getState().profileData.postData}
          newPostText={store.getState().profileData.newPostText}
          addPost={addPost}
          updateNewPostText={onPostChange} />
        }
      }
    </StoreContext.Consumer>)
}

export default MyPostsContainer;