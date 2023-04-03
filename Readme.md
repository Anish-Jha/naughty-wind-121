<h1 align="center">Healthcart.com Clone : HealthCure.com</h1>

<h2 align="center">HealthCure is an Indian online marketplace offering a comprehensive range of products dedicated to the vegan community, kids and women for their wellness and fitness needs.</h2>

<br />
<p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/> 
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
    <img src="https://camo.githubusercontent.com/5d58ae623237663dd0d209c197c95181d672cbc62ad322039de3c37f1647bcce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4368616b726125323055492d3362633762643f7374796c653d666f722d7468652d6261646765266c6f676f3d6368616b72617569266c6f676f436f6c6f723d7768697465" alt="chakraUI"/>
</p>

<br />

<h3 align="center"><a href="https://subtle-faun-0968ec.netlify.app/"><strong>Want to see live preview »</strong></a></h3>

### 🔗 Live Deployed URL: https://brilliant-cranachan-982a09.netlify.app/

<br />
<br />

## The user-Interface of the FurnitureTry.com

<h3>HealthCure Homepage Screenshot</h3>

<img width="950" alt="Homepage 1" src="https://user-images.githubusercontent.com/96651559/229432940-db9834f5-f51c-4047-bb3e-e087ea824e6f.PNG">

<br />

<img width="951" alt="Homepage 2" src="https://user-images.githubusercontent.com/96651559/229432963-21e751b1-cb38-4943-930f-4ab38c6615f3.PNG">

<br />
<h3>HealthCure Login Signup Screenshot</h3>

<br />

<img width="936" alt="Signup" src="https://user-images.githubusercontent.com/96651559/229433541-c1cffe0d-caf7-44d5-8685-05b1855fca74.PNG">

<br />

<img width="940" alt="Login" src="https://user-images.githubusercontent.com/96651559/229433570-b0d816da-98b2-4d9e-9be2-4b0274214ecf.PNG">

<br />

<h3>HealthCure Product Page Screenshot</h3>

![Product](https://user-images.githubusercontent.com/96651559/229433624-b8303928-dce0-4a87-af38-7ad50007b953.jpeg)

<br />

<br />

<br />
<h3>HealthCure Cart Page Screenshot</h3>

![Cart](https://user-images.githubusercontent.com/96651559/229433774-35464c5c-ae4c-4ccc-bfbb-eab0b1f23eb9.jpeg)

<br />
<h3>HealthCure Payment Checkout Page Screenshot</h3>

![Checkout](https://user-images.githubusercontent.com/96651559/229433872-59f85c6e-686c-484a-b89c-9f5f2e10b065.jpeg)

<br />

# Backend Architecture:

# Register & Login -->

    ##Admin -->
        # /users/register (while registering "role" should be "Admin")
        eg: {
            name:"admin's_name",
            email:"admin's_email",
            pass:"admin's_password",
            location:"admin's_location",
            gender:"admin's_gender",
            role:"Admin"
        }

        # /users/login (pass the email and password in req.body)
        --> it will give you the token

        # /users/
        --> it will give you all the registered users

        # /users/update/:userID
        --> you can update user information

        # /users/delete/:userID
        --> you can delete user

    ## User -->
        # /users/register (while registering "role" should be "User")
        eg: {
            name:"user's_name",
            email:"user's_email",
            pass:"user's_password",
            location:"user's_location",
            gender:"user's_gender",
            role:"User"
        }

        # /users/login (pass the email and password in req.body)
        --> it will give you the token

# Products Routes

    ## /products/
        --> it will give you products if you are login (user and admin both can get)

            --> pass category in query to filter data
            eg: /products?category=gainers

            --> pass sortByPrice in query to sort data by price
            eg: /products?sortByPrice=asc

            --> you can pass category and sortByPrice at same time
            eg: /products?category=gainers&sortByPrice=desc

    ## /products/:productID
        --> to get product by id

    ## /products/add
        --> only Admin can add new product

    ## /products/update
        --> only Admin can update products

    ## /peoducts/delete
        --> only Admin can delete products

# Cart

    ## /cart/
        --> get all products of cart (logged in user's cart data will come)

    ## /cart/add/:productID
        --> user should send reqired quantity and type in req.body
            --> type should be "inc" or "dec"
                --> inc for increment count of product
                --> dec for decrement count of product
                (by using type our products data base will also update)
        --> user can add product in his cart usin this route

    ## /cart/delete/:productID
        --> can delete items in cart
        (when user delete data from cart then products quantity in products data base will increase)

<br />

## Team Members:

<h3>Team Lead: <b>Anish Jha (fw20_1034)</b> </h3>

<br />
<h3>Member 1: <b>Prateek Agrawal (fw20_0114)</b> </h3>

<br />

<h3>Member 2: <b>Raj (fw20_0041)</b> </h3>

<br />

<h3>Member 3: <b>Mustaq Shaikh (fw20_0567)</b> </h3>

<br />

<h3>Member 4: <b>Sai Kiran At (fp05_185)</b> </h3>

<br />

## Project Code:

<h3>naughty-wind-121</h3>
<h3>IA: aakash.1@masaischool.com</h3>

<br />
<br />

## Show your support

Give a ⭐️ if you like this project!
