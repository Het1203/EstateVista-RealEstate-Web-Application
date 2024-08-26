import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Contact from './pages/Contact';
import PrivateRoute from './components/PrivateRoute.jsx';
import CreateListing from './pages/CreateListing.jsx';
import UpdateListing from './pages/UpdateListing.jsx';
import Listing from './pages/Listing.jsx';
import Search from './pages/Search.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />} >
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/update-listing/:listingId" element={<UpdateListing />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/listing/:listingId" element={<Listing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;