import React, {Component} from 'react';
import axios from 'axios';
console.log("current loggged in user",localStorage.getItem('logged_in'))

export default class UploadProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            productname: '',
            price: '',
            reqquantity: '',
            // currreqquantity:'',
            seller: localStorage.getItem('logged_in')

            
        }

        this.onChangeproductname = this.onChangeproductname.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangereqquantity = this.onChangereqquantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeproductname(event) {
        this.setState({ productname: event.target.value });
    }

    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }
    onChangereqquantity(event) {
        this.setState({ reqquantity: event.target.value });
    }




    onSubmit(e) {
        e.preventDefault();
        
        if (!this.state.productname|| !this.state.price ||
            !this.state.reqquantity) {
            return alert('Please first fill all the fields')
        }

        const newProduct = {
            productname: this.state.productname,
            price: this.state.price,
            reqquantity: this.state.reqquantity,
            seller: this.state.seller

        }

        axios.post('http://localhost:4400/uploadProduct', newProduct)
             .then(res => console.log(res.data));

        this.setState({
            productname: '',
            price: '',
            reqquantity: '',
            seller: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>productname: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.productname}
                               onChange={this.onChangeproductname}
                               />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="integer" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />  
                    </div>
                    <div className="form-group">
                        <label>reqquantity: </label>
                        <input type="integer" 
                               className="form-control" 
                               value={this.state.reqquantity}
                               onChange={this.onChangereqquantity}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Upload Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}