import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
      <div>
        <ul className="navLink">
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/historique">Historique</Link></li>
        </ul>
      </div>
    )
  }
}
