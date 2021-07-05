import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/bambifashion.jpeg';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag'/>
        </div>
        <div className='ms-m-description'>
          <h2>GET ALL THE BEARBRICK FROM OUR AUTHORIZED SUPPLIER</h2>
          <p>
          
          MYEXISTANCE is a retail store based in Osaka Japan, they offer an array of premium products, ranging from their own in-house label to a curated selection of multi-brand artworks.

          SHOP AUTHENTIC BE@RBRICK. LIMITED TIME OFFER.
          </p>
          <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/1')}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);