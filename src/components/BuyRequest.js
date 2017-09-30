import React, {Component} from 'react'
import {connect} from 'react-redux'

import BasicInput from './inputs/BasicInput'
import MoneyInput from './inputs/MoneyInput'

class BuyRequest extends Component {

  handleChange (e) {
    e.preventDefault()
    this.props.buildItem({[e.target.id] : e.target.value})
  }

  render() {
    return(
      <form>
        <BasicInput name="Name:"
          elementID={"name"}
          func={this.handleChange.bind(this)}
          />
        <MoneyInput name="Price:"
          elementID={"price"}
          func={this.handleChange.bind(this)}
          />
        <input type="submit" className="btn-primary btn"/>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    wishList: () => dispatch({type: "CREATE_ITEM"}),
    buildItem: (data) => dispatch({type: "ITEM", payload: data})
  }
}

export default connect(null, mapDispatchToProps)(BuyRequest)
