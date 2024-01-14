import React from 'react';
import PurchaseForm from './PurchaseForm';

function Product(props) {
  return (
    <React.Fragment>
      <div className='card-container' onClick={()=> props.whenProductClicked(props.id)}>
        <div className='product-card'>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>{props.origin}</p>
          <p>{props.roast}</p>
          <p>{props.quantity}</p>
          <PurchaseForm id={props.id} />
        </div>
      </div>
    </React.Fragment>
  );
}


export default Product;

