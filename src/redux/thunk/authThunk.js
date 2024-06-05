import { APIService } from "../../APIService";

const authThunk = (email, password, navigate) => async (dispatch) => {
  try {
    const service = new APIService();
    const token = await service.login(email, password);

    if (token) {
      const profile = await service.getUserProfile(token);

      dispatch({ type: "Login/login", payload: token });
      dispatch({
        type: "Profile/setUserProfile",
        payload: { firstName: profile.firstName, lastName: profile.lastName },
      });

      navigate("/profile");
    } else {
      alert("Username or password is incorrect");
      throw new Error("Token not received");
    }
  } catch (error) {
    console.error("Authentication error:", error);
  }
};

export { authThunk };
