import React from 'react';
import './style.css';
import logo from '../../Assets/logo513.png';
import { Link } from 'react-router-dom';

//card for wishlist and myorders
const Cardview = (props) => {
  return (
    <div className='GeneralCardview'>
      <Link to='/buyer/product'>
        <div className='GeneralCardview-main'>
          <div className='GeneralCardview-imagediv'>
            <img src={logo} className='GeneralCardview-image' alt={'logo'} />
          </div>
          <div className='GeneralCardview-info'>
            <div className='GeneralCardview-title'>{props.title}</div>
            <div className='GeneralCardview-sub'>
              <div className='GeneralCardview-namediv'>
                <div className='GeneralCardview-name'>Price</div>
                <div className='GeneralCardview-value'>
                  {props.price} {props.format}
                </div>
              </div>
              <div className='GeneralCardview-namediv'>
                <div className='GeneralCardview-name'>Category</div>
                <div className='GeneralCardview-value'>{props.category}</div>
              </div>
              <div className='GeneralCardview-namediv'>
                <div className='GeneralCardview-name'>Seller</div>
                <div className='GeneralCardview-value'>{props.seller}</div>
              </div>
              <div className='GeneralCardview-namediv'>
                <div className='GeneralCardview-name'>available</div>
                <div className='GeneralCardview-value'>{props.available}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Cardview.defaultProps = {
  title: 'Sony Camera',
  price: '25$',
  format: '/month',
  category: 'Camera',
  seller: 'john doe',
  available: 'True',
};

export default Cardview;
