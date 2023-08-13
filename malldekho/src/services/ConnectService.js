import axios from 'axios';
import qs from 'qs';
const ConnectService = {
    createConnect: async (reqBody) => {
        console.log(reqBody)
        try {
            let reqData = qs.stringify({
                "user": "64d7d5bfdac661c7c2bc9990",
                "name": reqBody.name,
                "email": reqBody.email,
                "phone": reqBody.phone,
                "comments": reqBody.comment
            });


            const response = await axios.post('http://localhost:3000/contact', reqData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            if (response.status === 200) {
                console.log('Data sent successfully:', response.data);
            } else {
                console.log('Error sending data:', response.statusText);
            }

        } catch (error) {
            console.error('Contact us creation failed!', error); // Error message, handle it as needed
        }
    }
}

export default ConnectService;