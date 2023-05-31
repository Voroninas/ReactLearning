import React from 'react';
import { follow, unfollow, setCurrentPage, getUsers } from './../../redux/usersReducer';
import { connect } from "react-redux"
import { compose } from "redux"
import { AppStateType } from "../../redux/reduxStore"
import Users from './Users'
import Preloader from '../common/preloader/Preloader.js'
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx'
import { usersType } from '../../types/types'

type propsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<usersType>
  followingInProgress: Array<number>
  /*portionSize?: number*/
  onPageChanged: (pageNumber: number) => void
  unfollow: () => void
  follow: () => void

  getUsers: (pageNumber: number, pageSize: number) => void
  setCurrentPage?: (pageNumber: number) => void
  isFetching: boolean
}

class UsersContainer extends React.Component<propsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber :number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    /*this.props.setCurrentPage(pageNumber)*/ //teacher forger this piece
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
        followingInProgress={this.props.followingInProgress} />
    </div>
  }
}

let mapStateToProps = (state :AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// to do i think here to much callbacks, we have thunk
export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }),
  /*withAuthRedirect*/)(UsersContainer);
  

/*export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers
})(UsersContainer);*/