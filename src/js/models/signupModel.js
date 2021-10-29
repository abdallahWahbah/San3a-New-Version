import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class Signup
{
    constructor(userName, userEmail, userPass1, userPass2)
    {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPass1 = userPass1;
        this.userPass2 = userPass2;
    }

    async postNewAccount () 
    {
        try
        {
            let res = await axios.post('https://cors-anywhere.herokuapp.com/http://20.52.51.184/api/rest-auth/registration/',
            {
                username: this.userName,
                email: this.userEmail,
                password1: this.userPass1,
                password2: this.userPass2
            }, 
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log(res);
        }
        catch(error)
        {
            console.log(error);
        }
    }
}
