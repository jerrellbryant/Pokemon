import React from 'react';
import {
    PokemonComponent,
    PokemonNameContainer,
    PokemonName,
    PokemonMeta,
    Span,
    PokemonImageContainer,
    PokemonImage,
    PokemonAttacks,
    SpanAttacks} from '../componentStyles/PokemonStyles.js'

export function Pokemon({ pokemon }) {
    return (
        <PokemonComponent>
            <PokemonNameContainer>
                <PokemonName>{pokemon.name}</PokemonName>
            </PokemonNameContainer>
            <PokemonMeta>
                <Span>{pokemon.maxHP}</Span>
                <Span>{pokemon.maxCP}</Span>
            </PokemonMeta>
            <PokemonImageContainer>
                <PokemonImage src={pokemon.image} alt={pokemon.name}/>
            </PokemonImageContainer>
            <PokemonAttacks>
                {pokemon.attacks.special.slice(0, 3).map(attack =>
                        <SpanAttacks key={`${attack.name}-${attack.damage}`}>
                            {attack.name}
                        </SpanAttacks>
                )}
            </PokemonAttacks>
        </PokemonComponent>
    )
}