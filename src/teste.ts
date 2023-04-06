import AuthAPI from "./banco-do-brasil/services/authAPI";

const teste: AuthAPI = new AuthAPI();

teste
  .getAuthToken()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
