import React from 'react';
import { Link } from 'react-router-dom';

const ProductPopUpActions = ({ id }) => (
    <div className="action-btns">
        <Link to={`/plates/${id}`}><button>View Details</button></Link>
        <br />
        <button>Add to Cart</button>
    </div>
);

export default ProductPopUpActions;