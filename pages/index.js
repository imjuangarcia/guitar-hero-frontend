// Globals
import React, { useState, useEffect } from 'react';

// Custom Components
import Base from '../components/globals/Base';
import Header from '../components/globals/Header';
import Filters from '../components/Filters';
import Sorting from '../components/Sorting';
import Grid from '../components/Grid';

// Content
import meli from '../data/meli.json';

export default function Home() {
  // State definition
  const [data, setData] = useState(meli);
  const [sorting, setSorting] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');
  const [specialOption, setSpecialOption] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [filters, setFilters] = useState({
    condition: 'all',
    provider: 'all',
    priceRange: [0, 1200000],
    showHiddenEntries: false
  });

  // Set of functions to filter the JSON data based on the parameters selected.
  const filterEntries = (param, value) => {
    // Before filtering the data, store the filter changes on state
    setFilters((prevState) => ({ ...prevState, [`${param}`]: value }));

    switch(param) {
      // 1. Filter by product condition
      case 'condition':
        if(value === 'all') return setData(meli);
        setData(meli.filter(product => product.type === value));
        break;
      // 2. Filter by product provider
      case 'provider':
        if(value === 'all') return setData(meli);
        setData(meli.filter(product => product.source === value));
        break;
      // 3. Filter by price range
      case 'priceRange':
        setData(meli.filter(product => product.price > value[0] && product.price < value[1]));
        break;
      default:
        // If none of these things are true, reset the filters
        setData(meli);
        break;
    }  
  }

  // Function to sort the JSON data based on the parameters selected
  const sortEntries = (value) => {
    setSorting(value);

    switch(value) {
      case 'price-asc':
        data.sort((a, b) => a.price > b.price ? 1 : -1);
        break;
      case 'price-desc':
        data.sort((a, b) => a.price > b.price ? -1 : 1);
        break;
      default:
        data.sort((a, b) => a.order > b.order ? 1 : -1);
        break;
    }
  }

  // Function to search in the JSON file based on the input term
  const searchEntries = (term) => {
    setSearchTerm(term);

    setData(meli.filter(item => item.title.toLowerCase().includes(term.toLowerCase())));
  }

  // Set of functions to the change special visualization option based on selection
  const changeSpecialOption = (option) => {
    setSpecialOption(option);
    let wordsToLookFor;
    let matches = [];

    switch(option) {
      case 'new':
        // TODO
        break;
      case 'favorites':
        // 2. Find the entries that are favorited
        favorites.map(favorite => meli.filter(item => item.id === favorite.id ? matches.push(item) : ''));
        setFavorites(matches);
        setData(matches);
        break;
      case 'hidden':
        // 3. Find the entries that are hidden
        hiddenItems.map(hiddenItem => meli.filter(item => item.id === hiddenItem.id ? matches.push(item) : ''));
        setHiddenItems(matches);
        setData(matches);
        break;
      case 'exchange':
        // 4. Find the entries that accept permutas, canjes, etc.
        wordsToLookFor = ['permuta', 'permuto', 'permut??', 'permut??', 'permutas', 'canje', 'tomo', 'parte', 'pago', 'menor', 'valor', 'val', 'trueque', 'cambio', 'men'];
        wordsToLookFor.map(word => meli.filter(item => item.title.toLowerCase().includes(word) ? matches.push(item) : ''));
        setData(matches);
        break;
      case 'opportunities':
        // 5. Find the entries that have opportunity, liquido, etc., words
        wordsToLookFor = ['oportunidad', 'liquido', 'remato', 'imperdible', 'joya', 'locos', 'viaje', 'urgente', 'rebaja', 'remat??', 'l??quido', 'regalo', 'regal??', 'exhibicion', 'reparar', 'exhibici??n', 'reparado', 'reparada', 'restaurar', 'restaurada', 'promocion', 'promoci??n', 'promo'];
        wordsToLookFor.map(word => meli.filter(item => item.title.toLowerCase().includes(word) ? matches.push(item) : ''));
        setData(matches);
        break;
      case 'cripto':
        // 6. Find the entries that have crypto related words
        wordsToLookFor = ['cripto', 'crypto', 'criptomoneda', 'cryptomoneda', 'criptomoney', 'cryptomoney', 'btc', 'bitcoin', 'eth'];
        wordsToLookFor.map(word => meli.filter(item => item.title.toLowerCase().includes(word) ? matches.push(item) : ''));
        setData(matches);
        break;
      default:
        // If none of these things are true, reset the filters
        setData(meli);
        break;
    }
  }

  // Function to store favorties
  const storeFavorite = (e, guitar) => {
    e.preventDefault();

    let array = favorites;
    const isFavoriteInArray = array.findIndex(favorite => favorite.id === guitar.id);
    
    if(isFavoriteInArray > -1) {
      // If the guitar is on the array, remove it
      array.splice(isFavoriteInArray, 1);
    } else {
      // If not, add it
      array.push(guitar);
    }
    
    // Store in localStorage and state
    localStorage.setItem('favorites', JSON.stringify(array));
    setFavorites(array);
    
    // Not an elegant solution, but we do this to ensure that, when adding or deleting a favorite, we get the updated style and count for the favorites
    window.location.reload();
  }
  
  // Function to hide items
  const hideItem = (e, guitar) => {
    e.preventDefault();

    let array = hiddenItems;
    const isItemInArray = array.findIndex(item => item.id === guitar.id);
    
    if(isItemInArray > -1) {
      // If the guitar is on the array, remove it
      array.splice(isItemInArray, 1);
    } else {
      // If not, add it
      array.push(guitar);
    }
    
    // Store in localStorage and state
    localStorage.setItem('hiddenItems', JSON.stringify(array));
    setHiddenItems(array);
    
    // Not an elegant solution, but we do this to ensure that, when adding or deleting a favorite, we get the updated style and count for the favorites
    window.location.reload();
  }

  useEffect(() => {
    // To get the favorites from localStorage
    const localFavorites = localStorage.getItem('favorites');
    if(localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }

    // To get the hidden items from localStorage
    const localHiddenItems = localStorage.getItem('hiddenItems');
    if(localHiddenItems) {
      setHiddenItems(JSON.parse(localHiddenItems));
    }
  }, []);

  return (
    <Base>
      <Header />
      <Filters
        filters={filters}
        setFilters={setFilters}
        filterEntries={filterEntries}
        rawData={meli}
        data={data}
      />
      <Sorting
        sorting={sorting}
        sortEntries={sortEntries}
        searchTerm={searchTerm}
        searchEntries={searchEntries}
        specialOption={specialOption}
        changeSpecialOption={changeSpecialOption}
      />
      <Grid
        data={data}
        filters={filters}
        favorites={favorites}
        storeFavorite={storeFavorite}
        hiddenItems={hiddenItems}
        hideItem={hideItem}
        specialOption={specialOption}
      />
    </Base>
  )
}
