export function addProducts(products){
    return {
        type: '@product/ADD_PRODUCTS',
        payload: { products }
    }
}
