import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Landing from './Pages/Landing/Landing';
import Register from './Pages/Register/Register';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import NotificationPage from './Pages/Notification/NotificationPage'
import AddProductPage from './Pages/AddProductPage/AddProductPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import UserProfile from './Pages/UserProfile/UserProfile'
import Orders from './Pages/UserProfile/Orders/Orders';
import Ads from './Pages/UserProfile/Ads/Ads';
import Address from './Pages/UserProfile/Address/Address';
import Profile from './Pages/UserProfile/Profile/Profile';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/categ" element={<Category />} />
            <Route exact path="/add-product" element={<AddProductPage />} />
            <Route exact path="/product-detail" element={<ProductDetails />} />
            <Route exact path="/notification" element={<NotificationPage />} />
            <Route exact path="/user-profile" element={<UserProfile />} />
            <Route exact path="/order-history" element={<Orders />} />
            <Route exact path="/your-ads" element={<Ads />} />
            <Route exact path="/edit-address" element={<Address />} />
            <Route exact path="/edit-profile" element={<Profile />} />
            
          </Routes>
      </Router>
    </>
  );
}

export default App;
