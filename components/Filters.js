import { Text, Box, Wrap, WrapItem, Flex, Select, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, SearchIcon } from '@chakra-ui/icons';

export default function Filters({
  filters,
  setFilters,
  filterEntries,
  data,
  rawData
}) {
  return (
    <Box mt="8">
      <Flex align="baseline">
        <Text
          fontWeight="semibold"
          fontSize="xs"
          textTransform="uppercase"
          color="gray.600"
          letterSpacing="1px"
        >
          Filters
        </Text>
        <Button
          leftIcon={filters.showHidden === false ? <ViewIcon /> : <ViewOffIcon />}
          bgColor="transparent"
          fontSize="xs"
          textTransform="uppercase"
          color="gray.400"
          letterSpacing="1px"
          ml="auto"
          h="auto"
          p="0"
          _focus={{
            outline: 'none',
          }}
          _active={{
            background: "transparent",
            border: 'none',
          }}
          _hover={{
            background: "transparent",
            color: "gray.600",
          }}
          onClick={() => setFilters((prevState) => ({ ...prevState, showHidden: !filters.showHidden }))}
        >
          {filters.showHidden === false ? 'Show' : 'Hide'} hidden entries
        </Button>
      </Flex>
      <Wrap
        mt="2"
        bgColor="gray.50"
        borderRadius="4"
        p="2"
        align="baseline"
        direction={{ base: 'column', md: 'row'}}
      >
        <WrapItem
          pl={{ base: "0", md: '2' }}
          pb={{ base: '2', md: '0' }}
          pr={{ base: '2', md: '0' }}
          w={{ base: 'full', md: 'auto' }}
        >
          <Flex
            align="baseline"
            direction={{ base: 'column', md: 'row'}}
            w="full"
            m="0"
          >
            <Text fontSize="xs" mr="2" textTransform="uppercase" color="gray.600" letterSpacing="1px">Condition:</Text>
            <Select
              bgColor="white"
              size="sm"
              borderRadius="2"
              color="gray.700"
              onChange={(e) => filterEntries('condition', e.target.value)}
            >
              <option value='all'>All ({rawData.length})</option>
              <option value='used'>Used ({rawData.filter(item => item.type === 'used').length})</option>
              <option value='refurbished'>Refurbished ({rawData.filter(item => item.type === 'refurbished').length})</option>
            </Select>
          </Flex>
        </WrapItem>
        <WrapItem
          pl={{ base: "0", md: '2' }}
          pb={{ base: '2', md: '0' }}
          pr={{ base: '2', md: '0' }}
          w={{ base: 'full', md: 'auto' }}
        >
          <Flex
            align="baseline"
            direction={{ base: 'column', md: 'row'}}
            w="full"
            m="0"
          >
            <Text fontSize="xs" mr="2" textTransform="uppercase" color="gray.600" letterSpacing="1px">Provider:</Text>
            <Select
              bgColor="white"
              size="sm"
              borderRadius="2"
              color="gray.700"
              onChange={(e) => filterEntries('provider', e.target.value)}
            >
              <option value='all'>All ({rawData.length})</option>
              <option value='meli'>Meli ({rawData.filter(item => item.source === 'meli').length})</option>
            </Select>
          </Flex>
        </WrapItem>
        <WrapItem
          pl={{ base: "0", md: '2' }}
          flexDirection={{ base: 'column', md: 'row'}}
          pb={{ base: '2', md: '0' }}
          pr={{ base: '2', md: '0' }}
          w={{ base: 'full', md: 'auto' }}
          alignItems="baseline"
          flex="1"
        >
          <Text fontSize="xs" mr="2" textTransform="uppercase" color="gray.600" letterSpacing="1px">Price Range:</Text>
          <Flex
            align="baseline"
            w={{ base: 'full', md: 'auto' }}
            m="0"
            flex="1"
          >
            <Text fontSize='sm' mr="2" color="gray.400" minW="72px">${filters.priceRange[0]}</Text>
            <RangeSlider
              aria-label={['min', 'max']}
              defaultValue={[0, 1200000]}
              min={0}
              max={1200000}
              onChange={(val) => filterEntries('priceRange', val)}
              minW="160"
              flex="1"
              ml="2"
              mr="2"
              step={1000}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text fontSize='sm' ml="2" color="gray.400" minW="72px">${filters.priceRange[1]}</Text>
          </Flex>
        </WrapItem>
        {/* <WrapItem
          pl={{ base: "0", md: '2' }}
          pr={{ base: "2", md: '0' }}
          w="full"
          m="0"
          flex="1"
        >
          <InputGroup size="sm">
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type='search' placeholder='Search' bgColor="white" />
          </InputGroup>
        </WrapItem> */}
      </Wrap>
    </Box>
  )
}
