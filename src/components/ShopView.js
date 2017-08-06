import React, {Component} from 'react';
import ProductList from './ProductList';


 class ShopView extends Component {
   render() {
     return (
         <div>
           <h1>Shop View</h1>
           <h2>Products</h2>
           {/* show our list of products here */}
            <ProductList
              productList={productList}
              viewMode={'SHOP'}
            addProductToCart={this.props.addProductToCart}/>

         </div>
     );

   }
 }

 export default ShopView;
