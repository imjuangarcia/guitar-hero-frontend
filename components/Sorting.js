import { Text, Box, Grid, GridItem, Select, Flex, Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Sorting({
  sorting,
  sortEntries,
  searchTerm,
  searchEntries
}) {
  return (
    <Box mt="8">
      <Grid
        alignItems="baseline"
        templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' }}
        gap={4}
      >
        <GridItem>
          <Flex
            align="baseline"
            direction={{ base: 'column', md: 'row'}}
          >
            <Text
              fontWeight="semibold"
              fontSize="xs"
              textTransform="uppercase"
              color="gray.600"
              letterSpacing="1px"
              mr="2"
              mb={{ base: '2', md: '0' }}
            >
              View:
            </Text>
            <Select size="sm" borderRadius="2" color="gray.700">
              <option value='all'>All</option>
              <option value='new'>New Entries</option>
              <option value='favorited'>Favorited</option>
              <option value='exchange'>Exchange friendly</option>
              <option value='opportunities'>Opportunities</option>
            </Select>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{ base: 'auto', xl: '2' }}
        >
          <InputGroup size="sm">
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input
              type='search'
              placeholder='Search'
              bgColor="white"
              defaultValue={searchTerm}
              onChange={(e) => searchEntries(e.target.value)}
            />
          </InputGroup>
        </GridItem>
        <GridItem>
          <Flex
            align="baseline"
            justify="flex-end"
            direction={{ base: 'column', md: 'row'}}
          >
            <Text
              fontWeight="semibold"
              fontSize="xs"
              textTransform="uppercase"
              color="gray.600"
              letterSpacing="1px"
              mr="2"
              mb={{ base: '2', md: '0' }}
            >
              Sort by:
            </Text>
            <Select
              size="sm"
              borderRadius="2"
              flex="1"
              variant="flushed"
              color="gray.700"
              onChange={(e) => sortEntries(e.target.value)}
              defaultValue={sorting}
            >
              <option value='none'>None</option>
              <option value='price-asc'>Price Ascending</option>
              <option value='price-desc'>Price Descending</option>
            </Select>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}
