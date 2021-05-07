import React from 'react';

import './Landing.styl';

const Landing = () => {
    return(
      <div>
        <a class="main-item" href="javascript:void(0);" tabindex="1" >Открыть подменю</a> 
        <ul class="sub-menu"> 
          <li><a href="#1">подпункт 1</a></li> 
          <li><a href="#2">подпункт 2</a></li> 
          <li><a href="#3">подпункт 3</a></li> 
        </ul> 
      </div>
    );
}

export default Landing;