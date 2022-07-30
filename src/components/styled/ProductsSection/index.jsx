import React from 'react'

import { NavBtn, ProductBtnLink, ProductCard, ProductContainer, ProductGrid, ProductImg, ProductTitle, ViewButton } from './ProductElements'
import Sand from '../../../images/sand.jpg'
import Sand2 from '../../../images/sand2.jpg'

const ProductsSection = () => {
  return (
    <ProductContainer id="products">
        <ProductTitle>Products</ProductTitle>
        <ProductGrid>
            <ProductCard>
               <ProductImg  src={Sand}  />
               <ViewButton>Sand</ViewButton>
            </ProductCard>
            <ProductCard>
            <ProductImg  src={Sand2}  />
            <ViewButton>Gravel</ViewButton>
            </ProductCard>
            <ProductCard>
               <ProductImg  src={Sand}  />
               <ViewButton>Sand</ViewButton>
            </ProductCard>
            <ProductCard>
            <ProductImg  src={Sand2}  />
            <ViewButton>Gravel</ViewButton>
            </ProductCard>
           
        </ProductGrid>
       <NavBtn> 
            <ProductBtnLink to="/allproducts">View More</ProductBtnLink>
       </NavBtn>
    </ProductContainer>
  )
}



export default ProductsSection