import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Pokemon } from '../components/Pokemon'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import {
    PokemonContainer
    } from '../componentStyles/PokemonStyles.js'

export function PokemonsContainer() {
    const {data: { pokemons = []} = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 10 }
    })
    return (
      <PokemonContainer>
          { pokemons && pokemons.map(
              pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />
              )}
      </PokemonContainer>
    )
}