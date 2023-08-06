import axios from 'axios';

const StoreService = {
  fetchAllStores: async () => {
    const response = await axios.get('http://localhost:3000/stores', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    });

    if(response.status === 200) {
        return response.data;
    }
    else {
      console.log(response.statusText);
    }
  },

  fetchStoresByMalls: async (mallId) => {
    const response = await axios.get(`http://localhost:3000/stores?mallId=${mallId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response.statusText);
    }
  },

  fetchStoreByID: async (storeId) => {
    const response = await axios.get(`http://localhost:3000/stores/${storeId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response.statusText);
    }
  },
};

export default StoreService;
