import React, {Component} from 'react';
import axios from 'axios';

export default class ProductList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {products: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4400/listProducts')
             .then(response => {
                 console.log("PRODUCT",this.state.products)
                 this.setState({products: response.data});
                 
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Required quantity</th>
                            <th>Current quantity</th>
                            <th>Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    { 
                        //console.log(this.state.products)
                        this.state.products.map((currentProduct,i) => {
                            return (
                                <tr>
                                    <td>{currentProduct.productname}</td>
                                    <td>{currentProduct.price}</td>
                                    <td>{currentProduct.reqquantity}</td>
                                    <td>{currentProduct.currquantity}</td>
                                    <td>{currentProduct.seller}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                   
                </table>
            </div>
        )
    }
}