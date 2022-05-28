import {environment} from "../../environments/environment";

const {API} = environment;
export const urls = {
  cars: `${API}/cars`,
  auth: `${API}/auth`,
  login: `${API}/login`,
};

