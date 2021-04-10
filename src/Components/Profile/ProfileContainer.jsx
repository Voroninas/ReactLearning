import React from 'react';
import { connect } from "react-redux"
import * as axios from 'axios'
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer.js'

class ProfileContainer extends React.Component {
  componentDidMount() {
    /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile?id=${id}`)*/
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) // ещё 8 полный
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

export default connect(mapStateToProps, { setUserProfile }) (ProfileContainer);