import React from 'react'
import ShopBanner from './ShopBanner'
import ShopProductCard from './ShopProductCard'
import ShopProductData from './ShopProductData'
import ShopRelatedProducts from './ShopRelatedProducts'

function Shop() {
    return (
        <main>
            <ShopBanner />
            <ShopProductCard />
            <ShopProductData />
            <ShopRelatedProducts />
        </main>
    )
}

export default Shop
