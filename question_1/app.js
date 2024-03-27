const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');

// middleware
app.use(express.json()); // for parsing application/json


let final_data;
let auth_data;
// Make a POST request to the registration endpoint
const getCredentials = async () => {
    const url = 'http://20.244.56.144/test/register';
const data = {
    companyName: 'gomart',
    ownerName: 'kunal',
    rollNo: '23303007',
    ownerEmail: 'kkunal644@gmail.com',
    accessCode: 'zpKKbc'
};
const res = await axios.post(url, data)
final_data = await res.json();
console.log(final_data);
}

getCredentials();

// here we will get access token and all the credentials
const getAuth = async () => {
    const url = "http://20.244.56.144/test/register";
    const res = await axios.post(url, final_data);
    auth_data = await res.json();

}
getAuth();

// route for getting all the products
app.get('/test/companies/:company/categories/:category/products', async (req, res) => {
    const { company, category } = req.params; // destructuring
    const { top, minPrice, maxPrice } = req.query; // destructuring

    // as stated in the question, products are fetched using company, category, minPrice, maxPrice
    // we need to query "top" number of products

    const api_url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try{
        // fetching the data
    const res = await axios.get(api_url);
    const products = await res.json();
    // returning the data
    return res.json({"data": products});
    }
    catch(err){
        return res.status(500).json({error: "Internal Server Error"});
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});