import './index.css'

const PasswordItem = props => {
  const {eachPasswordDetails, isShowPassword, onDeletePassword} = props
  const {id, website, userName, password} = eachPasswordDetails
  const initialLetter = website.slice(0, 1).toUpperCase()

  const deletePassword = () => {
    onDeletePassword(id)
  }

  return (
    <li className="list-item-container">
      <div className="container">
        <div className="initial-container">
          <h1 className="initial-letter">{initialLetter}</h1>
        </div>
        <div className="data-container">
          <p className="website">{website}</p>
          <p className="user-name">{userName}</p>
          {isShowPassword ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-img"
            />
          )}
        </div>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={deletePassword}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
