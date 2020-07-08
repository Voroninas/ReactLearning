import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    { id: "1", message: 'Hi, how are you?', likesCount: '0' },
    { id: "2", message: "Now the posts data in array", likesCount: '23' },
    { id: "3", message: "Посты не захардкожены в вёрстке", likesCount: '999' }
  ]

  let postElements = postData.map(postObj => <Post message={postObj.message} likesCount={postObj.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;