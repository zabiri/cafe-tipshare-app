import React, { Fragment, Component } from 'react'

import Header from '../../components/Header/Header'
import Input from '../Input/Input'
import Output from '../Output/Output'


class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Input/>
        <Output/>
      </Fragment>
    )
  }
}

export default Layout
