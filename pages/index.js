// Globals
import React, { useState, useEffect } from 'react';

// Custom Components
import Base from '../components/globals/Base';
import Header from '../components/globals/Header';
import Filters from '../components/Filters';
import Grid from '../components/Grid';

export default function Home() {
  const [filters, setFilters] = useState({
    condition: 'all',
    provider: 'all',
    priceRange: [{
      min: 0,
      max: 2000000
    }],
    showHidden: false
  });

  return (
    <Base>
      <Header />
      <Filters
        filters={filters}
        setFilters={setFilters}
      />
      <Grid
        filters={filters}
      />
    </Base>
  )
}
