import React from 'react';
import MyPosts from './MyPosts';
import {
  addPostActionCreator,
  /*updateNewPostTextActionCreator*/ 
  /*once upon a time i change the code in profileReducer 
  but do not check the affect, ups */
} from './../../../redux/profileReducer.ts';
import { connect } from "react-redux"
/*
const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator())
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
}*/

let mapStateToProps = (state) => {
  return {
    postData: state.profileData.postData,
    newPostText: state.profileData.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    }/*,
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }*/
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;