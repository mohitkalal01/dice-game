import React from 'react'
import logo from  "/images/logo.png"

import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Search = () => {
  return (
    <>
    <section className='search'>

<div className="contaziner c_flex">
<div className="logo width">
  <img src={logo} alt="" width={200}/>
</div>
<div className="search-box f_flex">
  <i className='fa fa-search'></i>
  <input type="text" placeholder='Search and hit enter...' />
  <span>All Category</span>
</div>
<div className="icon f_flex width">
  <i className='fa fa-user icon-circle'></i>
  <div className="cart">
    <Link to = "/cart">
    <i className='fa fa-shopping-bag icon-circle'></i>
    <span>0</span>
    </Link>
  </div>
</div>
</div>
    </section>
    </>
  )
}

export default Search
