import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../Contexts/productsContext';
import ProductCard from '../ProductCard/ProductCard'
import { Box, Container } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductsList = () => {
    const {getProducts, products} = useContext(productsContext)
    const navigate = useNavigate()
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Container>
            <Button variant='outlined' style={{marginTop: '30px', display:'flex', justifyContent: 'center'}} onClick={() => navigate(`/add-product`)}>Add product</Button>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} paddingTop={'30px'}>
                {products.map((item) => <ProductCard key={item.id} item={item}/>)}
            </Box>
        </Container>
    );
};

export default ProductsList;