import axios from 'axios';

const MallService = {
  fetchAllMalls: async () => {
    const response = await axios.get('http://localhost:3000/malls', {
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

export default MallService;
