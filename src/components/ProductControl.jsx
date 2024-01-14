import React from "react";
import ProductList from "./ProductList";
import BurlapDetail from "./BurlapDetail";
import NewBurlapForm from "./NewBurlapForm";
import EditProductForm from "./EditProductForm";
import ReuseableForm from "./ReusableForm";

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainProductList: [],
      selectedProduct: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisible: false,
        selectedProduct: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
      }));
    }
  };

  handleChangingSelectedBurlap = (id) => {
    const selectedProduct = this.state.mainProductList.filter(
      (product) => product.id === id
    )[0];
    this.setState({ selectedProduct: selectedProduct });
  };

  handleProductCreation = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);

    this.setState({
      mainProductList: newMainProductList,
      formVisible: false,
    });
  };
  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingTicket = (editedProduct) => {
    const editedMainProductList = this.state.mainProductList
      .filter((prod) => prod.id !== this.state.selectedProduct.id)
      .concat(editedProduct);
    this.setState({
      mainProductList: editedMainProductList,
      editing: false,
      selectedProduct: null,
    });
  };

  handleSellingingProduct = (id) => {
    const toSell = this.state.mainProductList.filter((prod) => prod.id === id)[0];
    let updatedQuant;
    toSell.purchased = true;
    if (toSell.quantity > 1) {
      updatedQuant = toSell.quantity - 1;
    } else {
      updatedQuant = "Out of Stock";
    }
    const updatedProd = { ...toSell, quantity: updatedQuant };
    const newList = this.state.mainProductList
      .filter((prod) => prod.id !== toSell.id)
      .concat(updatedProd);

    this.setState({
      mainProductList: newList,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditProductForm
          product={this.state.selectedProduct}
          onEditProduct={this.handleEditingProduct}
        />
      );
      buttonText = "Return to List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = (
        <NewBurlapForm onProductCreation={this.handleProductCreation} />
      );
      buttonText = "Return to List";
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = (
        <BurlapDetail
          product={this.state.selectedProduct}
          onClickingEdit={this.handleEditClick}
        />
      );
    } else {
      currentlyVisibleState = (
        <>
          <ProductList
            productList={this.state.mainProductList}
            onPurchase={this.handleSellingProduct}
            onProductSelection={this.handleChangingSelectedBurlap}
          />
        </>
      );
      buttonText = "Add Product";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default ProductControl;
