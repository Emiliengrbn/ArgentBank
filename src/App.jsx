import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import Account from "./pages/Account"
import Error from "./pages/Error"
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/profile" element={<Account />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <footer>
        <p className="copyright">Copyright 2020 Argent Bank</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
