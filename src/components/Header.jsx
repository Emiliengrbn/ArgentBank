import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { isAuthenticated } from "../redux/selector/isAuthenticated";

const logo = require("../assets/logo.png");

function Header() {
    const dispatch = useDispatch()
  
    const isUserAuthenticated = useSelector(isAuthenticated)
    const username = useSelector((state) => state.Profile.firstName)
  
    const handleDeleteStore = () => {
      dispatch({type: "Login/logout"})
      dispatch({type: "Profile/logout"})
    }
  
    return(
        <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo"/>
        </Link>
        {!isUserAuthenticated ?  
        <Link to="/login">
          <div className="sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            <p className="bold sign-in-text">Sign In</p>
          </div>
        </Link>
        : 
        <div className="logout-container">
          <Link to="/profile" className="user-name bold">
            <FontAwesomeIcon icon={faCircleUser} />
            {username}
          </Link>
          <Link to="/" onClick={handleDeleteStore}>
            <div className="sign-in">
            <FontAwesomeIcon icon={faRightFromBracket} />
              <p className="bold sign-in-text">Sign Out</p>
            </div>
          </Link>
        </div>}
      </header>
    )
}

export default Header