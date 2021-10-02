import React from 'react';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer.js'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    // userId was read from url, because we use withRouter
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer) // now we know what in url

export default connect(mapStateToProps, { 
  getUserProfile 
})(WithUrlDataContainerComponent);