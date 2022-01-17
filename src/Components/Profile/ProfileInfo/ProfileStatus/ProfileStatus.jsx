import React from 'react';
import s from '../ProfileInfo.module.css';
/*import Preloader from '../../../common/preloader/Preloader.js'*/

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activatedEditMode = () => {
    this.setState({ editMode: true })
  }
  deactivatedEditMode = () => {
    this.setState({ editMode: false })
    /*console.log("ProfileStatus updateStatus this.state.status", this.state.status)*/
    this.props.updateStatus({status: this.state.status})  // all i can say, trouble in updateStatus. Looks like server work wrong
  }
  componentDidUpdate = (prevProps, prevState) =>{
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }    
  }
  onStatusChange = (e) => {
    /*console.log("onStatusChange текст инпута e", e.currentTarget.value)*/
    this.setState({ status: e.currentTarget.value })
  }
  render() {
    /*console.log("ProfileStatus this.props.status", this.props.status)
    console.log("ProfileStatus this.state.status", this.state.status)*/
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activatedEditMode}>
              {/*{this.props.status}*/}
              {this.props.status && "---"}
            </span>
          </div>}
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange}
              onBlur={this.deactivatedEditMode}
              autoFocus={true} value={this.state.status}></input>
          </div>}
      </div>)
  }
}

export default ProfileStatus;