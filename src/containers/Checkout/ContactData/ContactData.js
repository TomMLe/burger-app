import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state ={
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading:false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Tom',
        address: {
          street: 'Test street',
          zipcode: '414141',
          country: 'US'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({loading: false})
    });
  }

  render () {
    let form = (
      <form>
        <Input inputtype = "input" name="name" placeholder="Your name"/>
        <Input inputtype = "input" name="email" placeholder="Your Email"/>
        <Input inputtype = "input" name="street" placeholder="Street Address"/>
        <Input inputtype = "input" name="postal" placeholder="Zip Code"/>
        <Button btnType="Success" clicked ={this.orderHandler}> ORDER </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return(
      <div className = {classes.ContactData}>
        <h4> Enter your Contact Data </h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
