import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from '../styles.scss'

export default class ColorHeadingOne extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const {
      text,
      color
    } = this.props

    return (
      <h1 className={style.test} style={{ color }}>
        {text}
      </h1>
    )
  }
}
