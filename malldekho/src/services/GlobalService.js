import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

const GlobalService = {
  BASE_URI: "https://malldekho-service.onrender.com",
  //BASE_URI: "http://localhost:3000"
  USER_ID: async () => {
    const token = Cookies.get('authCookie');
    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            console.log(decodedToken)
            return decodedToken._id;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }
  }
};

export default GlobalService;
