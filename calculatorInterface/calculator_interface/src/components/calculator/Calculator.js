import React, { useState, useEffect } from 'react'
import Button from './Button'
import { ButtonGroup,Row, Col,Container,Input } from 'reactstrap'
import axios from 'axios'

export default (props) => {
  /*
  Component Calculator
  affiche la calculatrice
  */
  const [lastCalc, setLastCalc] = useState([])
  const [signe, setSigne] = useState([])
  const [ans, setAns] = useState([])
  let nb_array = Array.apply(null, {length: 10}).map(Number.call, Number).reverse()
  nb_array.push(".","c")
  const symbole = ['/','*','+','-']

  const equalClick =(e)=>{
    // formate le string à envoyer
    const strToSend=signe.join("")
      const dataResp= apiCalcul(strToSend)
  }

  const ansClick =(e)=>{
    //ajoute le dernier resultat à l'ecran
    setSigne([
      ...signe,ans
    ])
  }
  const apiCalcul = (calculToSend) =>{
    //se connect a l'api de calcul, envoi le string et recupere la reponse de l'api
    const url='http://127.0.0.1:5000/calc?calc='+encodeURIComponent(calculToSend)

    axios.get(url)
    .then(objectData=>{
      const resultat = objectData.data.resultat
      const calcul = objectData.data.calcul
      //met le resultat et le calcul dans les hooks
      setLastCalc([
        calcul
      ])
      setSigne([
        resultat
      ])
      setAns([
        resultat
      ])
    })
    .catch(err=>{
      setSigne([
      "error"
    ])}
    )
  }

  return (
    <div>
      <Col xs={{size:2, offset:1}}>
        <Col className="noPadding">
        <Input value={lastCalc.join("")} disabled block/>
          <Input value={signe.join("")} disabled block/>
        </Col>
          <Row className="noMargin">
            <Col >
              <Row className="nb">
                {nb_array.map(nb=>{

                  return(
                    <React.Fragment>
                    {nb != "c"?(
                      <Col xs="4" className="noPadding">
                        <Button color="primary" value={nb} key={nb} btnSize="lg" outline="true"  onClick={()=>setSigne([
                          ...signe,nb
                        ])}/>
                      </Col>
                    ):(
                      <Col xs="4" className="noPadding">
                        <Button color="danger" value={nb} key={nb} btnSize="lg" onClick={()=>setSigne([
                          ""
                        ])}/>
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
                      <Button color="dark" value={sym} key={sym} btnSize="lg" onClick={()=>setSigne([
                        ...signe,sym
                      ])}/>
                    )
                  })
                  }
                </ButtonGroup>
            </Row>
          </Row>
          <Row className="noMargin">
            <Col className="noPadding">
                <Button color="dark" value="Ans"  btnSize="lg" onClick={ansClick}/>
            </Col>
            <Col className="noPadding">
                <Button color="primary" value="="  btnSize="lg" onClick={equalClick}/>
            </Col>
          </Row>
        </Col>
    </div>
  )


}
