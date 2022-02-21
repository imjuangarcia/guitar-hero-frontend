// Chakra components
import { GridItem, Image, Heading, Text, Link, IconButton } from '@chakra-ui/react';
import { StarIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

// Styles
import styles from './grid.module.css';

export default function GuitarItem({ 
  guitar,
  storeFavorite,
  isFavorite,
  isHidden,
  hideItem,
  filters
}) {
  if(isHidden === false || filters.showHiddenEntries === true) {
    return (
      <GridItem
        border="solid"
        borderWidth="1px"
        borderColor="gray.100"
        borderRadius="8"
        className={styles.Container}
      >
        <Link
          href={guitar.url}
          target="_blank"
          rel="noopener noreferrer"
          display="block"
          position="relative"
        >
          <IconButton
            aria-label={isFavorite ? 'Remove this guitar from favorites' : 'Favorite this guitar'}
            icon={<StarIcon />}
            color={isFavorite ? 'yellow.400' : 'white'}
            bgColor={isFavorite ? 'white' : 'transparent'}
            border="solid"
            borderWidth="1px"
            borderColor="gray.100"
            borderRadius="4"
            position="absolute"
            top="2"
            right="14"
            _hover={{
              background: "white",
              color: "yellow.400",
            }}
            onClick={(e) => storeFavorite(e, guitar)}
          />
          <IconButton
            aria-label={isHidden ? 'Show this guitar' : 'Hide this guitar'}
            icon={isHidden ? <ViewIcon /> : <ViewOffIcon />}
            color={isHidden ? 'gray.600' : 'white'}
            bgColor={isHidden ? 'white' : 'transparent'}
            border="solid"
            borderWidth="1px"
            borderColor="gray.100"
            borderRadius="4"
            position="absolute"
            top="2"
            right="2"
            _hover={{
              background: "white",
              color: "gray.600",
            }}
            onClick={(e) => hideItem(e, guitar)}
          />
          <Image
            src={guitar.image}
            alt={guitar.title}
            objectFit="cover"
            h="220"
            w="100%"
            borderTopLeftRadius="8"
            borderTopRightRadius="8"
          />
        </Link>
        <Link
          href={guitar.url}
          target="_blank"
          rel="noopener noreferrer"
          display="block"
          p="2"
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Heading size="sm" color="gray.900" mt="1">
            {guitar.title}
          </Heading>
          <Text mt="1" color="gray.600">
            ${guitar.price}
          </Text>
        </Link>
      </GridItem>
    )
  } else {
    return null;
  }
}
