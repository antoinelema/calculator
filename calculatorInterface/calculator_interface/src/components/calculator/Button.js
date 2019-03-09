import React, { useState, useEffect } from 'react'
import { Button,  Col, Row } from 'reactstrap'


export default (props) => {
  /*
  Un boutton de la calculatrice personalisable avec les props
  */
  return (
      <Button color={props.color} size={props.btnSize} onClick={props.onClick} outline={props.outline} block>{props.value}</Button>
  )
}
