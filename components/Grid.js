// Chakra components
import { Grid } from '@chakra-ui/react';

// Custom components
import GuitarItem from './Item';

export default function ProductGrid({ 
  data,
  favorites,
  storeFavorite,
  hiddenItems,
  hideItem,
  filters,
  specialOption
}) {
  return (
    <Grid
      templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
      gap={4}
      mt="4"
    >
      {data
        .map((guitar, index) => {
          return (
            <GuitarItem
              key={index}
              guitar={guitar}
              storeFavorite={storeFavorite}
              hideItem={hideItem}
              isFavorite={favorites.find(favorite => favorite.id.includes(guitar.id) ? true : false)}
              isHidden={hiddenItems.find(item => item.id.includes(guitar.id)) === undefined ? false : true}
              filters={filters}
              specialOption={specialOption}
            />
          )}
        )
      }
    </Grid>
  )
}
