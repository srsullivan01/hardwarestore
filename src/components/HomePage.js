import React, {Component} from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      itemCurrentlyOnSale: 'Hammers',
      editSaleItem: true,
      productList: [
 		{
 		  productName: 'Hammer',
 		  description: 'Itsa hammer',
 		  price: 12.3,
 		},
 		{
 		  productName: 'Nail',
 		  description: 'Itsa nail',
 		  price: 0.12,
 		}
 	],
    AdminView: true
    };
  }

  _toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({editSaleItem});
  };

  _handleItemCurrentlyOnSaleChange = (event) => {
   	    const itemCurrentlyOnSale = event.target.value;

   	    this.setState({itemCurrentlyOnSale});
     	};

  _addNewProductToProductList = (newProduct) => {
      const productList = [...this.state.productList];
      productList.push(newProduct);
      this.setState({productList});
  };

  _deleteProductFromProductList = (event)=> {
    const productList = [...this.state.productList];
    productList.splice(event, 1);
    this.setState({productList});
  };


    _addProductToCart = (index) => {
      const product = {...this.state.productList[index]};
      const cartList = [...this.state.cartList];

      cartList.push(product);

      this.setState({cartList});
    };

    _removeProductFromCart = (index) => {
      const cartList = [...this.state.cartList];

      cartList.splice(index, 1);

      this.setState({cartList});
    };


  render() {

    const adminView = <AdminView
        productList={this.state.productList}
        addNewProductToProductList={this._addNewProductToProductList}
        deleteProductFromListByIndex={this._deleteProductFromListByIndex}/>;

    const shopView = <ShopView
        productList={this.state.productList}
        addProductToCart={this._addProductToCart}/>;

     return (
         <div>
           <h1>Itsa Hardware Store</h1>
           <button onClick={this._toggleView}>
             {this.state.AdminView ? 'Show Shop View' : 'Show Admin View'}
           </button>
           <div>
             <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
             <span>
               <button onClick={this._toggleEditSaleItem}>
                 { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
               </button>
             </span>

             {
        this.state.editSaleItem ?
          <div>
  	        <input
  		        onChange={this._handleItemCurrentlyOnSaleChange}
  		        value={this.state.itemCurrentlyOnSale}
  		        type="text"
  	        />
          </div>
          : null
      }

      <button onClick={this._toggleAdminView}>
                   {this.state.showAdminView
                       ? 'Show Shop View'
                       : 'Show Admin View'}
                 </button>
               </div>
             </div>
           </div>

           <div id="view-container">
             {this.state.showAdminView ? adminView : shopView}

          <CartView
               productList={this.state.cartList}
               removeProductFromCart={this._removeProductFromCart}/>
           </div>
         </div>
     );
   }
 }

 export default HomePage;
