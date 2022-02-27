import React from 'react';
import './ourHistory.css';
import cake2 from '../../assets/cake2.jpg'

const OurHistory = () => {
  return (
    <section className="history" id="history">
      <div className="history_top">
        <h3 className="history_title">Cakes by Jums</h3>
        <h3 className="years_old">Over 5 Years <span className="quality">of Quality</span></h3>
        <p className="text">
          An icon on Church Street in Brighton, Keith Homemade Cakes is home
          to an exquisite assortment of freshly prepared homemade cakes and savouries. <br /><br />

          Boasting over five decades of industry experience, we’re staffed by a passionate 
          team of chefs and friendly front of store staff who go the extra mile to ensure 
          your experience is positive and delicious! All our mouth-watering desserts and 
          hearty pies are lovingly made using original recipes made from scratch with the 
          finest ingredients.
        </p>
        <hr className="long_border" />
        <p className="text">
          Don’t wait any longer to visit our store today or place your orders by
          <span><a href="tel: +23470668668" className="history_cta"> calling us!</a></span>
        </p>
        <hr className="short_border" />

      </div>

      <div className="history_bottom">
        <img src={cake2} />
      </div>
    </section>
  )
}

export default OurHistory;