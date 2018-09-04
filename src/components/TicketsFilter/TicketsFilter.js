import React, { Component } from 'react';

const fields = [
  'Все',
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки'
];

class TicketsFilter extends Component {
  changeFilter = e => {
    console.log(e.target.name);
  };

  render() {
    return (
      <div>
        <fieldset>
          {fields.map(item => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                defaultChecked={item === 'Все' ? true : false}
                onChange={this.changeFilter}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}

export default TicketsFilter;
