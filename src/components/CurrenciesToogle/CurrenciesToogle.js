import React, { Component } from 'react';

const fields = ['UAH', 'USD', 'EURO'];

class CurrenciesToogle extends Component {
  changeCurrency = e => {
    console.log(e.target.name);
  };

  render() {
    return (
      <div>
        <fieldset>
          {fields.map(item => (
            <div key={item}>
              <input
                type="radio"
                id={item}
                name={item}
                defaultChecked={item === 'UAH' ? true : false}
                onChange={this.changeCurrency}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}

export default CurrenciesToogle;
