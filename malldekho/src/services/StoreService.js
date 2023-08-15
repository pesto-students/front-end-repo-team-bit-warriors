import axios from 'axios';
import GlobalService from './GlobalService';

const StoreService = {
  fetchAllStores: async () => {
    const fetchUrl = `${GlobalService.BASE_URI}/stores`
    const response = await axios.get(fetchUrl);
    
    if(response.status === 200) {
      return response.data;
    }
    else {
      console.log(response.statusText);
    }
  },
  
  fetchStoresByMalls: async (mallId) => {
    const fetchStoreUrl = `${GlobalService.BASE_URI}/stores?mall_id=${mallId}`
    const response = await axios.get(fetchStoreUrl);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response.statusText);
    }
  },

  fetchStoreByID: async (storeId) => {
    const fetchurl = `${GlobalService.BASE_URI}/stores/${storeId}`
    const response = await axios.get(fetchurl, {
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
};

export default StoreService;
