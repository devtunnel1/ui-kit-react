import React, { Component } from 'react'

import { ButtonV1 } from 'ui-kit-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>This is a test heading.</h1>
        <ButtonV1 text='This is a test button yo!' />
      </div>
    )
  }
}
