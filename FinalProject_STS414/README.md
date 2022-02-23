# FinalProject-STS414
Repo to hold all the file for final project of STS414



## Screens :

- [x] Auth
  - [x] Sign in
  - [x] Sign up
- [x] Home
- [x] Shop
- [x] Product
- [x] Cart 
- [x] Checkout
- [x] Account
  - [x] View/Delete Account
- [x] Admin
  - [x] Insert Products
  - [x] View/Delete Products
  - [x] Update Products
  - [x] View/Delete Users
- [x] Support 



## Functionalities :

- [x] Auth
  - [x] Sign in
  - [x] Sign up
  - [x] Logout
- [x] Shop
  - [x] Software
  - [x] Games
  - [x] Category
- [x] Product Page
- [x] Cart
  - [x] View Cart
  - [x] Add to cart
  - [x] Update cart
  - [x] Delete from cart
  - [x] Checkout
- [x] Account
  - [x] View Account
  - [x] Delete Account
- [x] Admin
  - [x] View Users
  - [x] Delete User
  - [x] Insert Products
  - [x] View Products
  - [x] Update Product
  - [x] Delete Product
- [x] Support
- [x] Testing



## Instructions :

1. Clone the repo to our local machine
1. Run "npm install"
1. Replace varibales of .env file (mongo url, stripe public and private key)
1. For both "frontend" and "backend" folder, run following <br> 4.1 npm install <br> 4.2 npm start
1. New browser window will open with address "http://localhost:3000/"
1. To create admin, send POST request to "http://localhost:5000/api/admin/create" and it will create admin user with following details <br>
Name : admin <br>
Email : admin@admin.com <br>
Password : admin
1. Enjoy Admin module also by logging in as Admin
