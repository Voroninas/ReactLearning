import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom"
import * as axios from 'axios'
import { usersAPI } from '../../api/api.js'

const Users = (props) => {
  console.log("props for Users", props)
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  let endPages = []
  /*for (let i = 1; i <= pagesCount; i++) {*/
  // too many pages from server, i cut it
  for (let i = 1; i <= 5; i++) {
    pages.push(i)
  }

  for (let i = pagesCount - 3; i <= pagesCount; i++) {
    endPages.push(i)
  }

  return (<div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
          onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
      })
      }
      {/*// it`s mine piece*/}
    ...
      {
        endPages.map(p => {
          return <span className={props.currentPage === p && styles.selectedPage}
            onClick={(e) => { props.onPageChanged(p) }}> {p}</span>
        })
      }
      {/* // it`s mine piece
      ... {<span className={props.currentPage === pagesCount && styles.selectedPage}
          onClick={(e) => { props.onPageChanged(pagesCount) }}>{pagesCount}</span>}*/}
      <div>Итого {pagesCount} страниц, всего пользователей: {props.totalUsersCount}</div>
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ?
                u.photos.small : userPhoto}
                className={styles.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                usersAPI.unfollowUser(u.id).then(data => {
                  // this.props.toggleIsFetching(false)
                  if (data.resultCode == 0) {
                    props.unfollow(u.id)
                  }
                })
              }}>Unfollow</button>
              : <button onClick={() => {

                usersAPI.followUser(u.id).then(data => {
                  /* при пост запросе вторым аргументом идёт пустой объект
                  хз будет ли работать если сделано через instance
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'fb197b73-63a1-43b8-a2b2-92ee80c0ca0b'
                  }
                })*/

                  // this.props.toggleIsFetching(false)
                  if (data.resultCode == 0) {
                    props.follow(u.id)
                  }
                })
              }}>Follow</button>
            }
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
      </div>)
    }
  </div>)
}

export default Users;