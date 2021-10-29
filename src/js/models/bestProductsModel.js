import axios from 'axios';
import 'regenerator-runtime/runtime';
// import token from '../controllers/login';

export default class bestProductsModel
{
    async getBestProducts () 
    {
        
        try
        {
            let token = localStorage.getItem("token");
            const res = await axios('https://cors-anywhere.herokuapp.com/http://20.52.51.184/api/products/',
            {
                headers:
                {
                    // Authorization: `Token ${token}`, // abdallah token : a5a5cb9c3c6b76aa405dc438a0a94426ff0e67c5
                    Authorization: `Token a5a5cb9c3c6b76aa405dc438a0a94426ff0e67c5`
                }
            });
            console.log(res);
            this.results = res.data;
        }
        catch(error)
        {
            console.log(localStorage.getItem("token"));
            console.log(error);
        }
    }
}