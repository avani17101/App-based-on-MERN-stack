import React, {Component} from 'react';
import axios from 'axios';

export default class OrdersList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {orders: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4400/listbyseller')
             .then(response => {
                 this.setState({orders: response.data});
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
                            <th>productId</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th>userId</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.orders.map((currentUser, i) => {
                            return (
                                <tr>
                                    <td>{currentUser.productId}</td>
                                    <td>{currentUser.quantity}</td>
                                    <td>{currentUser.status}</td>
                                    <td>{currentUser.userId}</td>
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