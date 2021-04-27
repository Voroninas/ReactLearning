import React from 'react';
import { setAuthUserData } from './../../redux/authReducer.js'
import { connect } from "react-redux"
import * as axios from 'axios'
import Preloader from '../common/preloader/Preloader.js'
import Header from './Header.jsx'


class HeaderContainer extends React.Component {
  componentDidMount() {
    /*axios.get('').then(response => {})*/
    /*this.props.toggleIsFetching(true)*/
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        /*debugger*/
        /*this.props.toggleIsFetching(false)*/
        if (response.data.resultCode === 0){
          let {id,email,login} = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) =>{
  return {
    isAuth: state.auth.isAuth,
    /*login: state.auth.login*/ // я не авторизуюсь
  }
}

export default connect(mapStateToProps, {
  setAuthUserData
})(HeaderContainer);