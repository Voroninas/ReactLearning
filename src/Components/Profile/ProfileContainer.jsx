import React from 'react';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import * as axios from 'axios'
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer.js'
import { userProfileAPI } from '../../api/api.js'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    userProfileAPI.getAuthUserData(userId).then(data => {
      /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/id=${userId}`)*/ // i`m not sure that it will work
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) // 8-th profile is full of information

      /*this.props.toggleIsFetching(false)*/
      this.props.setUserProfile(data)
    })
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);