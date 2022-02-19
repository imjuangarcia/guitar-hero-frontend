// Chakra components
import { Grid, GridItem, Image, Heading, Text, Link, IconButton } from '@chakra-ui/react';
import { StarIcon, ViewOffIcon } from '@chakra-ui/icons';

// Content
import meli from '../data/meli.json';

// Styles
import styles from './grid.module.css';

export default function ProductGrid() {
  return (
    <Grid
      templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
      gap={4}
      mt="4"
    >
      {meli.map((guitar, index) => 
        <GridItem
          key={index}
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
              aria-label='Favorite this guitar'
              icon={<StarIcon />}
              color="white"
              bgColor="transparent"
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
            />
            <IconButton
              aria-label='Hide this guitar'
              icon={<ViewOffIcon />}
              color="white"
              bgColor="transparent"
              border="solid"
              borderWidth="1px"
              borderColor="gray.100"
              borderRadius="4"
              position="absolute"
              top="2"
              right="2"
              _hover={{
                background: "white",
                color: "gray.500",
              }}
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
      )}
    </Grid>
  )
}
