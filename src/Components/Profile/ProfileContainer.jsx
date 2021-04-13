import React from 'react';
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import * as axios from 'axios'
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer.js'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId){
      userId = 2
    }
    /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/id=${userId}`)*/ //не уверен что так сработает, возможно пропустил /
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) // ещё 8 полный
      .then(response => {
        /*this.props.toggleIsFetching(false)*/
        /*console.log("response по запросу профиля", response)*/
        this.props.setUserProfile(response.data)
      })
  }
	render(){
		return (
      <Profile {...this.props} profile={this.props.profile}/>
		)}
}

let mapStateToProps = (state)=>({
  profile: state.profileData.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile }) (WithUrlDataContainerComponent);