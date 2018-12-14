import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';

class CartActions extends React.Component {
    constructor() {
        super();
        this.state = { quantity: 1 };
    }

    updateQuantity = (event) => {
        event.preventDefault();
        console.log('triggered update');
        if (isNaN(event.target.value) || !event.target.value) {
            this.setState({ quantity: 1 });

        } else {
            this.setState({ quantity: event.target.value });
        }
    }

    render() {
        return (
            <StoreFrontend.Consumer>
                {({ addItemToCart }) =>
                    <div className="add-to-cart-action">
                        <input type="number" name="add-plates" min="1" step="1" value={this.state.quantity} onChange={(e) => this.updateQuantity(e)} onClick={() => addItemToCart(this.props.itemId, this.state.quantity)} />
                        <button>Add to cart</button>
                    </div>
                }
            </StoreFrontend.Consumer>
        );
    }
}

export default CartActions;