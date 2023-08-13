import axios from 'axios';
import qs from 'qs';
// import toastr from 'toastr';
// import 'toastr/build/toastr.min.css';

const authorizeUser = async (reqBody) => {
    try {
        let data = qs.stringify({
            "email": reqBody.email,
            "password": reqBody.password
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                // toastr.success('Login Successful!', 'Success', {
                //     closeButton: true,
                //     progressBar: true,
                // });
            })
            .catch((error) => {
                console.log(error.response.data);
            });

    } catch (error) {
        console.error('User creation failed!', error); // Error message, handle it as needed
    }
}

const createUser = async (reqBody) => {
    try {
        let reqData = qs.stringify({
            "username": reqBody.username,
            "email": reqBody.email,
            "password": reqBody.password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/users/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: reqData
        };

        axios.request(config)
            .then((response) => {
                //console.log('reached');
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    } catch (error) {
        console.error('User creation failed!', error); // Error message, handle it as needed
    }
}

export { authorizeUser, createUser} ;