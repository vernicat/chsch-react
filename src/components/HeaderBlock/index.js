import React, { Fragment } from 'react';

// import './HeaderBlock.styl';

const HeaderBlock = () => {
  return(
    <Fragment>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">CHSCH</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/">Главная</a>
          <a className="p-2 text-dark" href="/page2">Страница2</a>
        </nav>
      </div>  
    </Fragment>
  );
}

export default HeaderBlock;