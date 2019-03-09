import React, { useState, useEffect } from 'react'
import Button from './Button'
import { ButtonGroup,Row, Col,Container,Input } from 'reactstrap'

export default (props) => {
  /*
  Component Calculator
  affiche la calculatrice
  */
  let nb_array = Array.apply(null, {length: 10}).map(Number.call, Number).reverse()
  nb_array.push(".","c")
  const symbole = ['/','*','+','-']

  return (
    <div>
      <Col xs={{size:2, offset:1}}>

          <Row className="noMargin">
            <Col >
              <Row className="nb">
                {nb_array.map(nb=>{

                  return(
                    <React.Fragment>
                    {nb != "c"?(
                      <Col xs="4" className="noPadding">
                        <Button color="primary" value={nb} key={nb} btnSize="lg" outline="true"  onClick={()=>{console.log(nb)}}/>
                      </Col>
                    ):(
                      <Col xs="4" className="noPadding">
                        <Button color="danger" value={nb} key={nb} btnSize="lg" onClick={()=>{console.log(nb)}}/>
                      </Col>
                    )}
                    </React.Fragment>
                    )
                  })
                }
                </Row>
              </Col>
                <Row className="noMargin">
                  <ButtonGroup vertical>
                    {symbole.map(sym=>{
                      return(
                        <Button color="dark" value={sym} key={sym} btnSize="lg" onClick={()=>{console.log(sym)}}/>
                      )
                    })
                    }
                  </ButtonGroup>
              </Row>
            </Row>
            <Row className="noMargin">
              <Col className="noPadding">
                  <Button color="dark" value="Ans"  btnSize="lg" onClick={()=>{console.log("ans")}}/>
              </Col>
              <Col className="noPadding">
                  <Button color="primary" value="="  btnSize="lg" onClick={()=>{console.log("equal")}}/>
              </Col>
            </Row>
        </Col>
    </div>
  )


}
