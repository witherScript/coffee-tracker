import React from 'react';
import PurchaseForm from './PurchaseForm';

function Product(props) {
  return (
    <React.Fragment>
      <div className='card-container'>
        <div className='product-card'>
          <div className="click-box" onClick={()=> props.whenProductClicked(props.id)}>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.origin}</p>
            <p>{props.roast}</p>
            <p>{props.quantity}</p>
          </div>
          <PurchaseForm id={props.id} onPurchase={props.onPurchase} />
        </div>
      </div>
    </React.Fragment>
  );
}


export default Product;

