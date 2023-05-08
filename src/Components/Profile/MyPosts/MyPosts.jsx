import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
/*import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profileReducer.js';*/


const MyPosts = (props) => {
  let postElements = props.postData
    .map(postObj => <Post id={postObj.id}
      key={postObj.id}
      message={postObj.message}
      likesCount={postObj.likesCount}
      imgSrc={postObj.imgSrc} />)

// it`s not need anymore, instead was used event from onChange
  //let newPostElement = React.createRef()

  let onAddPost = () => { props.addPost() }

  let onPostChange = (event) => {
    // let text = newPostElement.current.value
    let text = event.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
            /*ref={newPostElement}*/
            value={props.newPostText}
            style={{ width: "400px" }} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;
