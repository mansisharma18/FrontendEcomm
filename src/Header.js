import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'; // Correct import
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const Header = () => {
  return (
    <nav className='header'>
        <Link to="/">
        <img  className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
         
         <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon  className="header__searchIcon"/>
        
        </div>
        <div className="header__nav">
            <Link to="/login" className="header_link">
                <div className="header_option">
                    <span  className="header_optionLineOne">Hello Mansi</span>
                    <span  className="header_optionLineTwo">Sign In</span>
                </div>

            </Link>


            <Link to="/" className="header_link">
                <div className="header_option">
                    <span  className="header_optionLineOne">Returns</span>
                    <span  className="header_optionLineTwo">& orders</span>
                </div>

            </Link>
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span  className="header_optionLineOne">Your</span>
                    <span  className="header_optionLineTwo">Prime</span>
                </div>

            </Link>
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                   
                    <span  className="header_optionLineTwo header__basketCount">0</span>
                </div>

            </Link>


        </div>
    </nav>
  )
}

export default Header