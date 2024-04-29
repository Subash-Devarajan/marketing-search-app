import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
    <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize' style={{color: 'black'}}>Marketing Search</h2><br />
            {/* <p className='header-text fs-18 fw-3' style={{color: 'white'}}>Search through the videos of marketing events!</p> */}
            <SearchForm />
        </div>
    </header>
</div>

  )
}

export default Header