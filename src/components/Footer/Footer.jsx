import React from 'react';
import '../Footer/style.css';
function Footer() {
  return (
    <>
      <footer className='text-center text-lg-start'>
        <div className='design-footer text-center p-4 d-flex  justify-content-center align-items-center text-muted'>
          © 2021 Copyright -{' '}
          <p className='fw-bold design-footer'>Vittório de Andrade Barella</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
