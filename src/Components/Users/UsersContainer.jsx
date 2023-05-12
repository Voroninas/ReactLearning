import React from 'react';
import { follow, unfollow, setCurrentPage, getUsers } from './../../redux/usersReducer.ts';
import { connect } from "react-redux"
import { compose } from "redux"
import Users from './Users'
import Preloader from '../common/preloader/Preloader.js'
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
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

let mapStateToProps = (state) => {
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