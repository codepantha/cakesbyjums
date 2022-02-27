import React from 'react';
import './footer.css';
import chat from '../../assets/chat.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="chat">
        <a 
          href="https://api.whatsapp.com/send?phone=2347037523771&text=Lynotek...%20Giving%20your%20business%20digital%20wings"
        >
          <img className="beating_heart" src={chat} />
        </a>
      </div>
      <pre className="footer_text">Made with<span className="beating_heart heart">❤️</span>      by 
        <a href="https://codepantherr.github.io/Portfolio/"> Codepantherr</a>
      </pre>
    </footer>
  )
}

export default Footer