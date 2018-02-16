import React from 'react';

function EditBeerList() {
  return(
    <div>
      <style jsx>{`
          ul {
            list-style: none;
          }
          li {
            margin: 5px 0;
          }
          li:hover {
            text-decoration: underline;
          }
          img {
            transform: scale(.5);
          }
          .columns {
            display: flex;
            object-fit: cover;
          }`}</style>
      <h5>Select Beer to Edit:</h5>

        <ul>
          <li><a href='#'>Big Sal Wormwood</a></li>
          <li><a href='#'>Lorem Ipsum</a></li>
          <li><a href='#'>Nth Child Git Porter</a></li>
          <li><a href='#'>Drop Top Red Ale</a></li>
          <li><a href='#'>Base Camp Saison</a></li>
          <li><a href='#'>Gigantic Winter Ale</a></li>
        </ul>

    </div>
  );
}

export default EditBeerList;
