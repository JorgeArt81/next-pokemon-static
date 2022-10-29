
enum LocalStorageKey {
  favorites = 'favorites'
}

const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem(LocalStorageKey.favorites) || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(LocalStorageKey.favorites, JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem(LocalStorageKey.favorites) || '[]');
  return favorites.includes(id);
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem(LocalStorageKey.favorites) || '[]');
}


const localFavorites = {
  existInFavorites,
  toggleFavorite,
  pokemons,
}

export default localFavorites;