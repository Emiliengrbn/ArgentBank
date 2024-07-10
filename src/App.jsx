import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import Account from "./pages/Account"
import Header from "./components/Header";
import PrivateRoot from "./privateRoot";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/profile" element={
              <PrivateRoot root="/login">
                <Account />
              </PrivateRoot>
            } ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <footer>
        <p className="copyright">Copyright 2020 Argent Bank</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
