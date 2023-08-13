import axios from 'axios';

const StoreService = {
  fetchAllStores: async () => {
    const response = await axios.get('http://localhost:3000/stores');

    if(response.status === 200) {
        return response.data;
    }
    else {
      console.log(response.statusText);
    }
  },

  fetchStoresByMalls: async (mallId) => {
    const fetchStoreUrl = `http://localhost:3000/stores?mall_id=${mallId}`
    console.log("fetchStoreUrl", fetchStoreUrl)
    const response = await axios.get(fetchStoreUrl);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response.statusText);
    }
  },

  fetchStoreByID: async (storeId) => {
    const response = await axios.get(`http://localhost:3000/stores/${storeId}`, {
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
