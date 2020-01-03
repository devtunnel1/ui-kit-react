import React, { Component } from 'react'

import { ColorHeadingOne, ColorHeadingTwo } from 'ui-kit-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <ColorHeadingOne
          text='Colored heading one is working'
          color={'red'}
        />

        <ColorHeadingTwo
          text='Colored heading two is working'
          color={'blue'}
        />
      </div>
    )
  }
}
