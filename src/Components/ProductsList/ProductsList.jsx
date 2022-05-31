import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../Contexts/productsContext';
import ProductCard from '../ProductCard/ProductCard'
import { Box, Container } from '@mui/system';

const ProductsList = () => {
    const {getProducts, products} = useContext(productsContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Container>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} paddingTop={'30px'}>
                {products.map((item) => <ProductCard key={item.id} item={item}/>)}
            </Box>
        </Container>
    );
};

export default ProductsList;