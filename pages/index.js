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
  const [filters, setFilters] = useState({
    condition: 'all',
    provider: 'all',
    priceRange: [0, 1200000],
    showHidden: false
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
      // default:
        // TBD
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
      />
      <Grid
        data={data}
      />
    </Base>
  )
}
