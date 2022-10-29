import { Pokemon } from "../interfaces";

export const createPokemonAdapter = (pokemon: Pokemon): Partial<Pokemon> => ({
  id: pokemon.id,
  name: pokemon.name,
  sprites: pokemon.sprites,
})