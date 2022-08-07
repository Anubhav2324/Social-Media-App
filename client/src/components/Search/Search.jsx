import React from 'react';
import Logo from '../../img/tweet.png';
import {UilSearch} from '@iconscout/react-unicons';
import './Search.css'

const Search = () => {
  return (
    <div className='Search'>
        {/* <img src={Logo} alt='' /> */}
        <div className="SearchInput">
            <input type="text" placeholder='#Explore' />
            <div className="SearchIcon">
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default Search