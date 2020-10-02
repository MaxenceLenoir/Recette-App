import React from 'react'

import { ColorContext } from './color'

const Card = ({ details }) => {
  const ingredients = details.ingredients
    .split(',')
    .map(item => <li key={item}>{item}</li>)
  
  const instructions = details.instructions
    .split('\n')
    .map(item => <li key={item}>{item}</li>)

  const requireImage = chemin => {
    try {
      return require(`../img/${chemin}`)
    } catch (err) {
      return require(`../img/default.jpeg`)
    }
  }

  return (
    <ColorContext.Consumer>
    {context => (
      <div>
        <div className="card">
          <div className="image">
            <img src={requireImage(details.image)} alt={details.nom} />
          </div>
          <div className="recette">
            <h2 style={{ color: context.state.color }}>{details.nom}</h2>
            <ul className="liste-ingredients">
              {ingredients}
            </ul>
            <ol className="liste-instructions">
              {instructions}
            </ol>
          </div>
        </div>
      </div>
    )}
    </ColorContext.Consumer>
  )
}

export default Card