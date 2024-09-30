import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';

function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
