import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
// this is a header component
function Header() {
    return (
        // create className for hader
        <div className='header'>
            {/*this is wher we add the logo */}
            
            <img
            className="header__logo"
            src="https://149350611.v2.pressablecdn.com/wp-content/uploads/2018/11/eXtension-black.png" 
            />

            <div className="header__option" >
                <span className="header__optionOne" >Ministry of Agriculture Khartoum State</span>
                <span className="header__optionTwo" >Sector of Extension and Technology Transfer</span>
            </div>

            
            {/*this is a search bar class where takes users inputs */}
            <div className="header__search" >
                <input className="header__searchInput"
                type="text" />
                {/*add search icon */}
                <SearchIcon
                className="header__searchIcon" />

            </div>


            {/*here is our navigation bar where users navigate to different sections */}
            <div className="header__nav">
                <div className="header__option">
                    {/*inside header option we having two spans
                    one for greeting users, the other for signing in */}
                    <span className="header__optionOne">Hello Farmer!</span>
                    <span className="header__optionTwo">Sign In</span>
                    
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Extension</span>
                    <span className="header__optionTwo">Centers</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Our</span>
                    <span className="header__optionTwo">Services</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne"></span>
                    <span className="header__optionTwo">Initiatives</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne"></span>
                    <span className="header__optionTwo">Resources</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne"></span>
                    <span className="header__optionTwo">Contact</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne"></span>
                    <span className="header__optionTwo">About</span>
                </div>




                

                

            </div>
            
        
        </div>
    )
}

export default Header

