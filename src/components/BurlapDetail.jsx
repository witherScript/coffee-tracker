import React from "react";
import PropTypes from "prop-types";

function BurlapDetail(props) {

  const { product, onClickingEdit } = props;

  return (
    <>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <p><em>Origin: {product.origin}</em></p>
      <p><em>Roast: {product.roast}</em></p>
      <br />
      <button onClick={() => onClickingEdit(product.id)}>Edit Product</button>
      <br />
    </>
  )
}

BurlapDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingIncrement: PropTypes.func
}

export default BurlapDetail;