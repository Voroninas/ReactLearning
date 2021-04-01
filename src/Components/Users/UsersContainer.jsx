import React from 'react';
import Users from './Users';
import {
  followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC
} from './../../redux/usersReducer.js';
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage    
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) =>{
      dispatch(setUsersTotalCountAC(totalCount))
    }
  }
}
// i can export just connect... without UsersContainer
// BUT i prefer this way
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;