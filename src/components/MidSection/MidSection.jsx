import React from 'react';
import './midsection.css';

const MidSection = () => {
  return (
    <section className="mid_section">
      <div className="mid_section_top">
        <h3 className="mid_section_title">A cake for every occasion.</h3>
        <hr />
        <p className="mid_section_info">
        Welcome to Cakes By Jums Homemade Cakes, your favourite cake shop in Nigeria! 
        Established in 1969, we bake and serve a tantalising selection of traditional
        and affordable cakes and pies that brighten everyone’s mood! 
        Grab your family and friends and drop by our store today!
        </p>
      </div>
      <div className="mid_section_bottom">
        <div className="bg"></div>
        <div className="message">
          <h3>Bake someone happy</h3>
          <p>handcrafted with love and passion for you and the whole family…</p>
        </div>
      </div>
    </section>
  )
}

export default MidSection