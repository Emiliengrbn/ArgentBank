import { APIService } from "../../APIService";

const modifyThunk = (token, firstname, lastname) => async (dispatch) => {
  try {
    const service = new APIService();

    const modify = await service.modifyUserProfile(token, firstname, lastname);
    console.log(modify);

    dispatch({
      type: "Profile/setUserProfile",
      payload: { firstName: modify.firstName, lastName: modify.lastName },
    });
  } catch (error) {
    console.error("Authentication error:", error);
  }
};

export { modifyThunk };
