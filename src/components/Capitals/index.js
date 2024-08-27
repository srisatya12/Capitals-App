import {Component} from 'react'
const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}
  getCapital = event => {
    this.setState({capital: event.target.value})
  }
  render() {
    const {capital} = this.state
    const result = countryAndCapitalsList.filter(each=>
    each.id ===capital)
    console.log(result)
    return (
      <div>
        <h1>Countries and Capitals</h1>
        <select onChange={this.getCapital} id="capitals">
          {countryAndCapitalsList.map(each => (
            <option value={each.id} key={each.id}>
              {each.capitalDisplayText}
            </option>
          ))}
        </select>
        <label for="capitals">is Capital of Which Country?</label>
        <p>{result[0].country}</p>
      </div>
    )
  }
}
export default Capitals
// Write your code here
