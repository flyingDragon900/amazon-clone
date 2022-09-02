import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
