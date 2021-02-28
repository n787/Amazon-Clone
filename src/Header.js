import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{ basket, user }] = useStateValue();  //here we call state and dispatch from stateProvider
    console.log(basket);   //all the info of product comes
    const login =()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
            <img className="headLogo" src="https://th.bing.com/th/id/OIP.Ij-T9vzDM4JSiGYAri0PpQHaD5?w=329&h=180&c=7&o=5&pid=1.7" alt=" "/>
            </Link>
            <div className="headerSreach">
                <input type="text" className="searchBar"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="headerNav">
                <Link to={!user && "/login"} className="headerLink">  {/*if there is no user then direct to login page */}
                    <div onClick={login} className="HeaderOption">
                        <span className="headerOptionOne">Hello{user?.email}</span>
                        <span className="headerOptionTwo">{user? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="headerLink">
                    <div className="HeaderOption">
                        <span className="headerOptionOne">Return</span>
                        <span className="headerOptionTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="headerLink">
                    <div className="HeaderOption">
                        <span className="headerOptionOne">Your</span>
                        <span className="headerOptionTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="headerLink">
                    <div className="headerBasket">
                        <ShoppingBasketIcon />
                        <span className="cartCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
           
        </nav>
    )
}

export default Header
