import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

const Navbar = () => {

  const [{ basket, user }, dispatch] = useStateValue()
  // console.log(user.email);
  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className="navbar">
      <div className="nl">
        <div className="nlo nll">
          <Link to={'/'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fKufBY695Q0yaxi16mTfncnssAOjQJ0nb1VrRuEW&s" alt="amazon logo" /></Link>
        </div>
        <div className="nlo nlr">
          <small>Hello</small>
          <strong><span><LocationOnIcon /></span>Select your address</strong>
        </div>
      </div>
      <div className="nm">
        <input type="text" /><span><SearchIcon /></span>
      </div>

      <div className="nr">
        <div className="nno nnl">
          <small>Hello</small>
          <strong><span>{user ? user?.email.split('@')[0] : 'Guest'}</span></strong>
        </div>
        <div className="nno nnsl" onClick={handleAuth}>
          <Link to={!user && '/signin'}>
            <small>Hello, <span>{user ? 'Sign Out' : 'Sign in'}</span></small></Link>
          <strong>Account & Lists</strong>
        </div>
        <div className="nno nnsr">
          <small>Returns</small>
          <strong>& Orders</strong>
        </div>
        <div className="nno nnr">
          <Link to={'/checkout'}><ShoppingCartIcon /></Link>
          <span>{basket?.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
