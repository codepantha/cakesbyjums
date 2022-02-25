import React from 'react'
import './header.css';
import chef from '../../assets/chef.png'
import cake from '../../assets/cake.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <h1 className="title">Cakes by Jums</h1>
        <img className="header_chef" src={chef} />
        <h2 className="tagline">The taste of home-baked goodness...</h2>
        <p className="address">
          Cakes by Jums <br />
          36, Allen Street, Lekki Lagos <br />
          <span className="tel bold">
            <a href='tel: +2347037464332'>(+234)7037464332</a>
          </span>
        </p>
        <p className="address">
          Mon - Fri 7am - 5pm <br />
          Sat 7am - 3pm <br />
          Sun Closed
        </p>
      </div>
      <div className="header_bottom">
        <img className="header_bottom_cake" src={cake} />
      </div>
    </header>
  )
}

export default Header