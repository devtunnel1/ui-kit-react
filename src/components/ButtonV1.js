import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import style from '../styles.scss'

export default class ButtonV1 extends Component {
  static propTypes = {
    text: PropTypes.string,
    // color: PropTypes.string
  }

  render() {
    const {
      text,
      color
    } = this.props

    return (
      <div className={style.test}>
        <Button variant='contained' color='primary'>
          {text}
        </Button>
      </div>
    )
  }
}
