const ProductPrice = ({ price }) => {
    return (
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    );
};

export default ProductPrice;