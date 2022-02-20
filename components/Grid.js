// Chakra components
import { Grid } from '@chakra-ui/react';

// Custom components
import GuitarItem from './Item';

export default function ProductGrid({ 
  data,
  favorites,
  storeFavorite
}) {
  return (
    <Grid
      templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
      gap={4}
      mt="4"
    >
      {data
        .map((guitar, index) => 
        favorites.find(favorite => favorite.id.includes(guitar.id)) ?
          <GuitarItem
            key={index}
            guitar={guitar}
            storeFavorite={storeFavorite}
            isFavorite={true}
          />
        :
          <GuitarItem
            key={index}
            guitar={guitar}
            storeFavorite={storeFavorite}
            isFavorite={false}
          />
        )
      }
    </Grid>
  )
}
