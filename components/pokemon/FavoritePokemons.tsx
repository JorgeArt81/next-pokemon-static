import { Grid } from '@nextui-org/react';

import { FavoriteCarPokemon } from './FavoriteCarPokemon';

interface Props {
  pokemons: number[];
}
export const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavoriteCarPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
