import React from 'react';
import Logo from './../../visualAssets/Screen Shot 2018-11-30 at 4.10.26 PM.png'

function Header(){
    return (
        <div className='header'>
        <img className='logo' src={Logo} alt=''/>
            {/* <h1>Header</h1> */}
        </div>
    )
}
export default Header