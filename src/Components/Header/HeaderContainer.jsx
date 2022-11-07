import React from 'react';
import { getAuthUserData } from './../../redux/authReducer.js'
import { connect } from "react-redux"
import Preloader from '../common/preloader/Preloader.js'
import Header from './Header.jsx'


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return <>
      {this.props.isFetching ?
        <Preloader />
        : null}
      <Header {...this.props} />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login // now i`m login
  }
}

export default connect(mapStateToProps, {
  getAuthUserData
})(HeaderContainer);