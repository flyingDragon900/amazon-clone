import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Payment from './Components/Payment/Payment';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import SignIn from './Components/SignIn/SignIn';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(`user is logged in`, authUser);
      // if user is logged in
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // if user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/payment' element={<Payment />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
