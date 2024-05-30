import { FetchAll } from "./fetchAll";
import { loginSlice } from "./redux/login";

const { login } = loginSlice.actions;

const fetchAuthToken = (email, password, navigate) => async (dispatch) => {
  try {
    const fetchAll = new FetchAll();
    const token = await fetchAll.postLogin(email, password);
    
    if (token) {
      const aze = await fetchAll.postProfile(token);
      console.log(aze);
      dispatch(login(token));
      navigate("/profile");
    } else {
      alert("Username or password is incorrect");
      throw new Error("Token not received");
    }
  } catch (error) {
    console.error("Authentication error:", error);
  }
};

export { fetchAuthToken };
