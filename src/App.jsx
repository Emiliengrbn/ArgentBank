import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import Account from "./pages/Account"
import Error from "./pages/Error"
const logo = require("./assets/logo.png");

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src={logo} alt="logo" className="logo"/>
          <Link to="/sign-in">
            <div className="sign-in">
              <FontAwesomeIcon icon={faCircleUser} />
              <p className="bold sign-in-text">Sign In</p>
            </div>
          </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <footer>
        <p className="copyright">Copyright 2020 Argent Bank</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
