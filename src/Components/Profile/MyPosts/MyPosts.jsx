import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPost } from './../../../redux/state';

const MyPosts = (props) => {
  let postElements = props.postData
    .map(postObj => <Post message={postObj.message} 
                          likesCount={postObj.likesCount} 
                          imgSrc={postObj.imgSrc} />)

  let newPostElement = React.createRef()
  let addPost = () => {
    props.addPost()
    /*newPostElement.current.value = ""*/
    /*props.updateNewPostText("")*/
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/*<textarea ref={newPostElement}></textarea>*/}
          <textarea onChange={onPostChange} 
              ref={newPostElement} 
              value={props.newPostText} 
              style={{width:"400px"}} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;