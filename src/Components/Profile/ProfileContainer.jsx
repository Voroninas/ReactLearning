import React from 'react';
/*import { Redirect } from 'react-router-dom'*/
import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from 'react-router-dom'
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer.js'
import { withAuthRedirect } from '../hoc/withAuthRedirect.jsx'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    // userId was read from url, because we use withRouter
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  status: state.profileData.status
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,  // now we know what in url
  withAuthRedirect)(ProfileContainer);

/*let AuthRedirectComponent = withAuthRedirect()

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent) 

export default connect(mapStateToProps, {
  getUserProfile
})(WithUrlDataContainerComponent);*/