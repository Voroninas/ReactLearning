import React from 'react';
import {
  follow, unfollow, setUsers, setCurrentPage,
  setTotalUsersCount, toggleIsFetching
} from './../../redux/usersReducer.js';
import { connect } from "react-redux"
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/preloader/Preloader.js'
import { usersAPI } from '../../api/api.js'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
  }

  render() {
    return <div>
      {this.props.isFetching ?
        <Preloader />
        : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        isFetching={this.props.isFetching} />
    </div>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}
/* // больше не используется
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unfollowAC(userId)) },
    setUsers: (users) => { dispatch(setUsersAC(users)) },
    setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
    setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
    toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) }
  }
}*/

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer);