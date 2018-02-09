import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return(
  <div className='footerFlex'>
    <style jsx global>{`
        .footerFlex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2% 5%;
          border-top: 1px solid black;
          background-color: #6495ed6e;
        }
        a {
          text-decoration: none;
        }
    `}</style>
  <h4><Link to='/'>React.Taps</Link></h4>
    <p>Cool Stuff</p>
  </div>
  );
}

export default Footer;
