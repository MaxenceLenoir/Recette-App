import React from 'react'

import { ColorContext } from './color'

const Header = ({ pseudo }) => {
  const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`


  return (
    <ColorContext.Consumer>
      {context => (
        <header style={{ backgroundColor: context.state.color}}>
          <h1>La boite à recette {formatPseudo(pseudo)}</h1>
        </header>
      )}
    </ColorContext.Consumer>
  )
}

export default Header