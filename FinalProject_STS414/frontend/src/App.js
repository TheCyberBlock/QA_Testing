import './App.css';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SoftwareScreen from './screens/softwares/SoftwareScreen';
import InternetScreen from './screens/softwares/InternetScreen';
import ProductivityScreen from './screens/softwares/ProductivityScreen';
import CommunicationScreen from './screens/softwares/CommunicationScreen';
import SearchScreen from './screens/SearchScreen.js';
import GameScreen from './screens/games/GameScreen';
import FPSScreen from './screens/games/FPSScreen';
import RPGScreen from './screens/games/RPGScreen';
import FantasyScreen from './screens/games/FantasyScreen';
import CartScreen from './screens/cart/CartScreen';
import RemoveFromCartScreen from './screens/cart/RemoveFromCartScreen';
import AddToCartScreen from './screens/cart/AddToCartScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import ViewAccount from './screens/account/ViewAccount';
import UpdateAccount from './screens/account/UpdateAccount';
import DeleteAccount from './screens/account/DeleteAccount';
import Users from './screens/admin/Users';
import DeleteUser from './screens/admin/DeleteUser';
import Products from './screens/admin/Products';
import DeleteProduct from './screens/admin/DeleteProduct';
import UpdateProduct from './screens/admin/UpdateProduct';
import InsertProduct from './screens/admin/InsertProduct';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer.js';
import Auth from './components/Auth/Auth.js';
import ContactUs from './components/contactForm';
import PaymentPage from './components/PaymentPage';



function App() {
  return (

    <BrowserRouter>

      <div className="App">

        <header>
          <Navbar />
        </header>

        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/games" component={GameScreen} exact></Route>
          <Route path="/games/category/FPS" component={FPSScreen} exact></Route>
          <Route path="/games/category/RPG" component={RPGScreen} exact></Route>
          <Route path="/games/category/Fantasy" component={FantasyScreen} exact></Route>
          <Route path="/softwares" component={SoftwareScreen} exact></Route>
          <Route path="/softwares/category/Internet" component={InternetScreen} exact></Route>
          <Route path="/softwares/category/Productivity" component={ProductivityScreen} exact></Route>
          <Route path="/softwares/category/Communication" component={CommunicationScreen} exact></Route>
          <Route path="/account" component={ViewAccount} exact></Route>
          <Route path="/account/update" component={UpdateAccount} exact></Route>
          <Route path="/account/delete" component={DeleteAccount} exact></Route>
          <Route path="/payment" component={PaymentPage} exact></Route>
          <Route path="/auth" component={Auth} exact></Route>
          <Route path="/support" component={ContactUs} exact></Route>
          <Route path="/admin/users" component={Users} exact></Route>
          <Route path="/admin/users/delete/:id" component={DeleteUser}></Route>
          <Route path="/admin/products" component={Products} exact></Route>
          <Route path="/admin/product/insert" component={InsertProduct} exact></Route>
          <Route path="/admin/products/delete/:id" component={DeleteProduct}></Route>
          <Route path="/admin/products/update/:id" component={UpdateProduct}></Route>
          <Route path="/addToCart/:id" component={AddToCartScreen}></Route>
          <Route path="/removeFromCart/:id" component={RemoveFromCartScreen}></Route>
          <Route path="/cart/:id" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/search/:name" component={SearchScreen}></Route>
        </main>

        <br /> <br />
        
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App; 
