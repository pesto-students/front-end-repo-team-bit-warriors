import axios from 'axios';
import qs from 'qs';
import GlobalService from './GlobalService';
import Cookies from 'js-cookie';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const FavoriteService = {
  
    fetchFavoriteById: async (UserId) => {
      const fetchUrl = `${GlobalService.BASE_URI}/user/${UserId}/fav`
      const response = await axios.get(fetchUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.log(response.statusText);
      }
    },
  
    updateFavoriteById: async (reqBody) => {
      console.log(reqBody)
      try {
          let reqData = qs.stringify({
              "firstname": reqBody.firstname,
              "email": reqBody.email,
              "username": reqBody.username,
              "phone": reqBody.phone,
              "image": reqBody.image
          });
          
          const updateUrl= `${GlobalService.BASE_URI}/${reqBody._id}/fav`
          const response = await axios.put(updateUrl, reqData, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
          });
          if (response.status === 200) {
              console.log('Data updated successfully:', response.data);
          } else {
              console.log('Error sending data:', response.statusText);
          }
  
      } catch (error) {
          console.error('Profile update failed!', error); // Error message, handle it as needed
      }
  }
  };
  
export default FavoriteService;