export class APIService {
  login(email, password) {
    const data = {
      email,
      password,
    };

    return fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.body.token) {
          return data.body.token;
        } else {
          console.error("Erreur : Token non reçu", data);
        }
      })
      .catch((error) => {
        console.error("Erreur de requête:", error);
      });
  }

  getUserProfile(token) {
    return fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        return data.body;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  modifyUserProfile(token, firstname, lastname) {
    const data = {
      firstName: firstname,
      lastName: lastname,
    };
    console.log(data);

    return fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
        return data.body;
      })
      .catch((error) => console.error("Error:", error));
  }

  //   putProfile() {}
}
