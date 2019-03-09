import React, { useState,useEffect,Component } from 'react'
import {Row, Col, Input } from 'reactstrap';
import axios from 'axios'

export default (props)=>{
  const [history, setHistory] = useState()

  useEffect(() => {
    //va chercher l'historique des calcul a chaque fois que le composant est monté
    const url='http://127.0.0.1:5000/history'
    axios.get(url)
    .then(objectData=>{
      const dataHistory = objectData.data
      const linesHistory = (dataHistory.split(';'))
      //met l'historique dans le hook history
      setHistory(
        linesHistory
      )
    })
    .catch(err=>{
      console.log("error");
    })
  })



  return(
    <Row>
      <Col xs={{size:6, offset:1}}>
      <h1>Historique</h1>
        <ul>
          {history &&
            history.map(line =>{
              if (line != ""){
                return(
                  <li>{line}</li>
                )
              }
          })}
        </ul>
      </Col>
    </Row>
  )

}
