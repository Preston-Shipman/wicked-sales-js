import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        customerName: {
          value: ''
        },
        creditCard: {
          value: ''
        },
        shippingAddress: {
          value: ''
        }
      }
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  inputHandler(event) {
    const nameOfTarget = event.target.name;
    const value = event.target.value;
    const creditCardRegEx = /^[0-9]{13,16}$/;
    const creditInput = document.getElementById('cc');
    let isValid = false;

    this.setState({
      form: {
        ...this.state.form,
        [nameOfTarget]: {
          ...this.state.form[nameOfTarget],
          value
        }
      }
    });

    creditInput.onblur = e => {
      if (this.state.form.creditCard.value !== '') {
        if (creditCardRegEx.test(this.state.form.creditCard.value) === true) {
          isValid = true;
        }
        if (isValid === true) {
          document.getElementById('ccSpan').style.visibility = 'hidden';
        } else {
          document.getElementById('ccSpan').style.visibility = 'visible';
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('Nothing');
      }
    };
  }

  handleOrder(event) {
    event.preventDefault();
    const customerInfo = {
      name: this.state.form.customerName.value,
      creditCard: this.state.form.creditCard.value,
      shippingAddress: this.state.form.shippingAddress.value
    };
    this.props.placeOrder(customerInfo);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-black">Checkout:</h1>
            <form onSubmit={(this.handleOrder)}>
              <div className="form-group">
                <label htmlFor="name" className="text-black"> Name </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="customerName"
                  value={this.state.form.customerName.value}
                  onChange={this.inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cc" className="text-black"> Credit Card </label>
                <input
                  className="form-control"
                  id="cc"
                  type="text"
                  name="creditCard"
                  value={this.state.form.creditCard.value}
                  onChange={this.inputHandler}
                />
                <span id="ccSpan">Please input a valid 16 digit credit card number</span>
              </div>
              <div className="form-group">
                <label htmlFor="shippingInfo" className="text-black"> Shipping Address </label>
                <input
                  className="form-control"
                  id="shippingInfo"
                  type="text"
                  name="shippingAddress"
                  value={this.state.form.shippingAddress.value}
                  onChange={this.inputHandler}
                />
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
