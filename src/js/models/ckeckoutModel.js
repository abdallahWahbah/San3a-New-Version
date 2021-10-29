import axios from 'axios';
import 'regenerator-runtime/runtime';

export default class checkoutModel
{
    async getBestProducts () 
    {
        
        try
        {
            let token = localStorage.getItem("token");

            const res = await axios(`http://20.52.51.184/api/products/`, 
            // const res = await axios('https://cors-anywhere.herokuapp.com/http://20.52.51.184/api/products/',
            {
                headers:
                {
                    // Authorization: `Token ${token}`
                    Authorization: `Token a5a5cb9c3c6b76aa405dc438a0a94426ff0e67c5`
                }
            });
            // console.log(res);
            this.results = res.data;
        }
        catch(error)
        {
            console.log(error);
        }
    }
}