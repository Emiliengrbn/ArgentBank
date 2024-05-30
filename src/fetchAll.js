export class FetchAll {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  postLogin(email, password) {
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

  postProfile(token) {
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

  //   postProfile() {}

  //   putProfile() {}
}
