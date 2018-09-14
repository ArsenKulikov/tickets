import React, { Component } from 'react';
import { setCurrency } from '../../actions';
import { connect } from 'react-redux';

const fields = ['UAH', 'EURO', 'USD' ];

class CurrenciesToogle extends Component {

  render() {
    
    return (
      <div>
        <fieldset>
          {fields.map(item => (
            <div key={item}>
              <input
                type="radio"
                id={item}
                name='currencies'
                value={item}
                defaultChecked={item === 'UAH'}
                onChange={() => this.props.setCurrency(item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currency: state.currencyReducer
})

const mapDispatchToProps = dispatch => ({
  setCurrency: item => dispatch(setCurrency(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrenciesToogle);
