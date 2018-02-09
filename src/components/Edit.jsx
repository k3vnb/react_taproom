import React from 'react';
import { Switch, Router } from 'react-router-dom';


function Edit() {
  if (window.location.href.indexOf('edit') > -1){
    return(
      <div>
        <div>
          Edit Beer
        </div>
      </div>
    );

  } else if (window.location.href.indexOf('addnew') > -1){
    return(
      <div>
        <div>
          Add New Beer
        </div>
      </div>

    );
  }
}

export default Edit;
