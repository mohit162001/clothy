import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShowContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Component/RelatedProducts/RelatedProduct';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((i)=>i.id===Number(productId))
  console.log(product)
  return (
    <div>
      <ProductDisplay product={product}/>
      <RelatedProduct/>
    </div>
  )
}
export default Product;