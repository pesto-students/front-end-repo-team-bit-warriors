import axios from 'axios';
import GlobalService from './GlobalService';

const DiscountService = {

  fetchDiscountByStoreId: async (storeId) => {
    const fetchUrl = `${GlobalService.BASE_URI}/discount?store_id=${storeId}`
    const response = await axios.get(fetchUrl, {
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
};

export default DiscountService;
