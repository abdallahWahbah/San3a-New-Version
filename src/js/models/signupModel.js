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
        this.status;
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
            this.status = res.status
        }
        catch(error)
        {
            // console.log(error.response.status);
            // console.log(error.response.data);

            if(error.response.data["username"]) this.renderErrorMessage(error.response.data["username"][0])
            if(error.response.data["email"]) this.renderErrorMessage(error.response.data["email"][0])
            if(error.response.data["password1"]) this.renderErrorMessage(error.response.data["password1"][0])
            if(error.response.data["password2"]) this.renderErrorMessage(error.response.data["password2"][0])
        }
    }
    renderSuccessMessage()
    {
        const marukup=
        `
        <div class="signup__error--message active">
            <div class="signup__error--message-value">Email create successfully, Please login</div>
            <div class="signup__error--message-close-container">
                <div class="signup__error--message-close">&cross;</div>
            </div>
        </div>
        `;
        document.querySelector(".signup").insertAdjacentHTML("beforeend", marukup);
    }
    renderErrorMessage(message)
    {
        const marukup=
        `
        <div class="signup__error--message active">
            <div class="signup__error--message-value">${message}</div>
            <div class="signup__error--message-close-container">
                <div class="signup__error--message-close">&cross;</div>
            </div>
        </div>
        `;
        document.querySelector(".signup").insertAdjacentHTML("beforeend", marukup);
    }
}
