import React from "react";

function Footer() {
  return(
  <div className='footerFlex'>
    <style jsx>{`
        .footerFlex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2% 5%;
          border-top: 1px solid black;
          background-color: #6495ed6e;
        }
    `}</style>
    <h4>React.Taps</h4>
    <p>Cool Stuff</p>
  </div>
  );
}

export default Footer;
