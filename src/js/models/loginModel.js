import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class Login
{
    constructor(userName, userPassword)
    {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userToken = "";
    }

    async login () 
    {
        try
        {
            // var form = new FormData();
            // form.append("username", this.userName);
            // form.append("password", this.userPassword);
            let res = await axios.post('https://cors-anywhere.herokuapp.com/http://20.52.51.184/auth-token/',
            // let res = await axios.post('http://20.52.51.184/auth-token/',
            {
                username: this.userName,
                password: this.userPassword
            }, 
            // form,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            // username: abdallah, pass:abdallah12
            // this.userToken = "8ba5a1aa0eaa50a7dcfe6235ef1311b800a3b0e7"; // san3a token
            // this.userToken = "a5a5cb9c3c6b76aa405dc438a0a94426ff0e67c5"; // abdallah token
            this.userToken = res.data.token;
            console.log(res.data.token);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    getToken()
    {
        return this.userToken;
    }
}