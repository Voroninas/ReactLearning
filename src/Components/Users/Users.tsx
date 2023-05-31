import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User.jsx'
import { usersType } from '../../types/types'

type propsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  /*portionSize?: number*/
  users: Array<usersType>
  followingInProgress: Array<number>
  unfollow: () => void
  follow: () => void
}

const Users :React.FC<propsType> = (props) => {
  return (<div>
    <Paginator totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize} currentPage={props.currentPage}
      onPageChanged={props.onPageChanged} />
    {
      props.users.map(u => <User user={u}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow} follow={props.follow} />)
    }
  </div>)
}

export default Users;