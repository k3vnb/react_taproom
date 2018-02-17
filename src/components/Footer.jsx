import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div className='footerFlex'>
      <style jsx>{`
        .footerFlex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2% 1%;
          margin-right: 100px;
          border-top: 1px solid black;
          overflow: hidden;
          background-color: #e5eeff6e;
          height: 30px;
          position: fixed;
          bottom: 0;
          width: 100vw;
        }
        a {
          text-decoration: none;
        }
    `}</style>
      <h4><Link to='/'>React.Taps</Link></h4>
    </div>
  );
}

export default Footer;
