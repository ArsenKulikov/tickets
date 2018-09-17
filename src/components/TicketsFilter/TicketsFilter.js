import React, { Component } from 'react';
import { setVisibilityFilter } from '../../actions';
import { connect } from 'react-redux';

const fields = [
  { name: 'Все', filter: 'SET_ALL' },
  { name: 'Без пересадок', filter: '0' },
  { name: '1 пересадка', filter: '1' },
  { name: '2 пересадки', filter: '2' },
  { name: '3 пересадки', filter: '3' }
];

const initialState = fields;

class TicketsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SET_ALL: true,
      0: false,
      1: false,
      2: false,
      3: false
    };
  }

  componentDidMount() {
    console.log('cmpdddmnt');
    this.props.setVisibilityFilter('SET_ALL');
    //this.setState({ SET_ALL: true });
  }

  handleFilterChange = (filter, e) => {
    const filters = this.props.filters;

    if (filter === 'SET_ALL' ) {
      this.setState({SET_ALL: true, 0:false,1:false,2:false,3:false})
      this.props.setVisibilityFilter(filter);
      console.log(filter)
    } else if (!filters.includes(filter) && filter !== 'SET_ALL') { 
      this.setState({SET_ALL:false, [e.target.name]: true})
      this.props.setVisibilityFilter(filter);
      console.log(filter)
    } else if (filters.includes(filter) && filter !== 'SET_ALL') {
      this.setState({[e.target.name]: false})
      this.props.setVisibilityFilter(filter);
      console.log(filter)
    }
  }
 
  render() {

    return (
      <form>
        <fieldset>
          {fields.map(item => {
            
            return (
              <div key={item.name}>
                <input
                  type="checkbox"
                  id={item.name}
                  name={item.filter}
                  checked={this.state[item.filter]}
                  onChange={e => this.handleFilterChange(item.filter, e)}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          })}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.visibilityFilterReducer.filters
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
  //unsetVisibilityFilter: filter => dispatch(unsetVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsFilter);
