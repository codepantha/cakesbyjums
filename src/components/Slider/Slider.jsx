import React from 'react';
import './slider.css';
import MySlider from 'react-perfect-slider';
import spongeCake from '../../assets/themed_sponge_cake.jpg';
import noveltyCake from '../../assets/novelty_cake.jpg';
import cupCake from '../../assets/cup_cake.jpg';

const cakeInfo = [
  {
    title: 'Novelty Cakes',
    img: noveltyCake
  },
  {
    title: 'Themed Sponge Cakes',
    img: spongeCake
  },
  {
    title: 'Cup Cakes',
    img: cupCake
  },
]

const Slider = () => {
  return (
    <section className="slider">
      <MySlider renderControls={(next, previous) => [
          <button className="left_btn" onClick={previous}>&lt;</button>,
          <button className="right_btn" onClick={next}>&gt;</button>
      ]}>
          {cakeInfo.map((cake, i) => (
            <div className="slider_img_wrapper">
              <img className="slider_img" src={cakeInfo[i].img} />
            </div>
          ))}
      </MySlider>
    </section>
  )
}

export default Slider;