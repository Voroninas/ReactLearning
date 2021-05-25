import React from 'react';
import { setAuthUserData } from './../../redux/authReducer.js'
import { connect } from "react-redux"
import * as axios from 'axios'
import Preloader from '../common/preloader/Preloader.js'
import Header from './Header.jsx'
import { authUserDataAPI } from '../../api/api.js'


class HeaderContainer extends React.Component {
  componentDidMount() {
    /*axios.get('').then(response => {})*/
    /*this.props.toggleIsFetching(true)*/
    authUserDataAPI.getAuthUserData().then(data => {
      /*debugger*/
      /*this.props.toggleIsFetching(false)*/
      if (data.resultCode === 0) {
        let { id, email, login } = data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login // now i`m login
  }
}

export default connect(mapStateToProps, {
  setAuthUserData
})(HeaderContainer);