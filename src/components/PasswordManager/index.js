import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    showPassword: false,
    passwordManagerList: [],
    searchUserName: '',
  }

  onClickWebsiteInput = event => {
    this.setState({website: event.target.value})
  }

  onClickUserNameInput = event => {
    this.setState({userName: event.target.value})
  }

  onClickPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onShowPasswordClicked = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onDeletePassword = id => {
    const {passwordManagerList} = this.state
    const updatedList = passwordManagerList.filter(item => item.id !== id)
    this.setState({passwordManagerList: updatedList})
  }

  onSearchUserInput = event => {
    this.setState({searchUserName: event.target.value})
  }

  onSubmitUserDetails = event => {
    event.preventDefault()
    const {passwordManagerList, website, userName, password} = this.state
    const updateUserData = {
      id: uuidV4(),
      website,
      userName,
      password,
    }

    this.setState({
      passwordManagerList: [...passwordManagerList, updateUserData],
      website: '',
      userName: '',
      password: '',
    })
  }

  render() {
    const {
      website,
      userName,
      password,
      passwordManagerList,
      showPassword,
      searchUserName,
    } = this.state
    console.log(passwordManagerList)
    console.log(website)
    console.log(userName)
    console.log(password)

    const searchFilteredUserName = passwordManagerList.filter(item =>
      item.website.toLowerCase().includes(searchUserName.toLowerCase()),
    )

    return (
      <div className="app-bg-container">
        <div className="password-bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-manager-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="logo-img"
              alt="password manager"
            />
            <form className="form" onSubmit={this.onSubmitUserDetails}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="website-icon"
                  alt="website"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.onClickWebsiteInput}
                  value={website}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="website-icon"
                  alt="username"
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={userName}
                  onChange={this.onClickUserNameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="website-icon"
                  alt="password"
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onClickPasswordInput}
                  value={password}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="bottom-section">
            <div className="password-search-container">
              <div className="password-count">
                <h1 className="password-text">Your Passwords </h1>
                <p className="span-count">{passwordManagerList.length}</p>
              </div>

              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-icon"
                  alt="search"
                />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search"
                  onChange={this.onSearchUserInput}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="check-box-container">
              <div className="check-box-label">
                <input
                  type="checkbox"
                  className="check-box-input"
                  id="checkbox"
                  onChange={this.onShowPasswordClicked}
                />
                <label htmlFor="checkbox" className="label-text">
                  Show Passwords
                </label>
              </div>
            </div>
            {searchFilteredUserName.length === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p className="form-heading">No Passwords</p>
              </div>
            ) : (
              <ul className="items-list-container">
                {searchFilteredUserName.map(eachPasswordItem => (
                  <PasswordItem
                    key={eachPasswordItem.id}
                    eachPasswordDetails={eachPasswordItem}
                    isShowPassword={showPassword}
                    onDeletePassword={this.onDeletePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
