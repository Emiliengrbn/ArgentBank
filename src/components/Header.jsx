import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { loginSlice } from "../redux/login";

const { logout } = loginSlice.actions;
const logo = require("../assets/logo.png");

function Header() {
    const dispatch = useDispatch()
  
    const token = useSelector((state) => state.Login.token)
    const username = useSelector((state) => state.Profile.firstName)
  
    const handleDeleteStore = () => {
      dispatch(logout())
    }
  
    return(
        <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo"/>
        </Link>
        {!token ?  
        <Link to="/login">
          <div className="sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            <p className="bold sign-in-text">Sign In</p>
          </div>
        </Link>
        : 
        <div className="logout-container">
          <div className="user-name">
            <FontAwesomeIcon icon={faCircleUser} />
            {username}
          </div>
          <Link to="/login" onClick={handleDeleteStore}>
            <div className="sign-in">
            <FontAwesomeIcon icon={faRightFromBracket} />
              <p className="bold sign-in-text">Log out</p>
            </div>
          </Link>
        </div>}
      </header>
    )
}

export default Header