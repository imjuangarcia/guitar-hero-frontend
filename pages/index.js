// Globals
import React, { useState } from 'react';

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
      case 'favorited':
        // TODO
        break;
      case 'exchange':
        // 3. Find the entries that accept permutas, canjes, etc.
        wordsToLookFor = ['permuta', 'permuto', 'permutá', 'permutó', 'permutas', 'canje', 'tomo', 'parte', 'pago', 'menor', 'valor', 'val', 'trueque', 'cambio'];
        wordsToLookFor.map(word => meli.filter(item => item.title.toLowerCase().includes(word) ? matches.push(item) : ''));
        setData(matches);
        break;
      case 'opportunities':
        // 4. Find the entries that have opportunity, liquido, etc., words
        wordsToLookFor = ['oportunidad', 'liquido', 'remato', 'imperdible', 'joya', 'locos', 'viaje', 'urgente', 'rebaja', 'remató', 'líquido', 'regalo', 'regaló'];
        wordsToLookFor.map(word => meli.filter(item => item.title.toLowerCase().includes(word) ? matches.push(item) : ''));
        setData(matches);
        break;
      default:
        break;
    }
  }

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
      />
    </Base>
  )
}
