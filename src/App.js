import React from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Card from './components/Card'
import Admin from './components/Admin'

import withFirebase from './hoc/withFirebase'

const App = (props) => {

  const cards = Object.keys(props.recettes)
    .map(key => <Card key={key} details={props.recettes[key]} />)
    
  return (
    <div className='box'>
      <Header pseudo={props.match.params.pseudo} />
      <div className='cards'>
        { cards }
      </div>
      <Admin
        pseudo={props.match.params.pseudo}
        recettes={props.recettes}
        majRecette={props.majRecette}
        ajouterRecette={props.ajouterRecette}
        supprimerRecette={props.supprimerRecette}
        chargerExemple={props.chargerExemple} />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
