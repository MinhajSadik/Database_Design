import api from "./api.js";
import endPoint from "./jwtConfig";

class JwtService {
  feachedAccessToken = false;
  user = [];
  jwtConfig = { ...endPoint };

  constructor() {}

  login = (data) => {
    return api.post(this.jwtConfig.login, data, {
      //   withCredentials: true,
    });
  };
}

export default JwtService;
