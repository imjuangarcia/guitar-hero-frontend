import { Text, Box, Wrap, WrapItem, Flex, Select, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, SearchIcon } from '@chakra-ui/icons';

export default function Filters() {
  return (
    <Box mt="8">
      <Flex align="baseline">
        <Text fontWeight="semibold" fontSize="xs" textTransform="uppercase" color="gray.600" letterSpacing="1px">
          Filters
        </Text>
        <Button leftIcon={<ViewIcon />} bgColor="transparent" fontSize="xs" textTransform="uppercase" color="gray.400" letterSpacing="1px" ml="auto">
          Show hidden entries
        </Button>
      </Flex>
      <Wrap
        mt="2"
        bgColor="gray.50"
        borderRadius="4"
        p="2"
        align="baseline"
      >
        <WrapItem pl="2">
          <Flex align="baseline">
            <Text fontSize="xs" mr="2" textTransform="uppercase" color="gray.600" letterSpacing="1px">Condition:</Text>
            <Select bgColor="white" size="sm" borderRadius="2">
              <option value='all'>All</option>
              <option value='used'>Used</option>
              <option value='refurbished'>Refurbished</option>
            </Select>
          </Flex>
        </WrapItem>
        <WrapItem pl="2">
          <Flex align="baseline">
            <Text fontSize="xs" mr="2" textTransform="uppercase" color="gray.600" letterSpacing="1px">Provider:</Text>
            <Select bgColor="white" size="sm" borderRadius="2">
              <option value='all'>All</option>
              <option value='meli'>Meli</option>
            </Select>
          </Flex>
        </WrapItem>
        <WrapItem pl="2">
          <Flex align="baseline">
            <Text fontSize="xs" mr="2" textTransform="uppercase" color="gray.600" letterSpacing="1px">Price Range:</Text>
            <Text fontSize='sm' mr="2" color="gray.400">0</Text>
            <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 2000000]} onChangeEnd={(val) => console.log(val)} minW="160" flex="1" ml="2" mr="2">
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Text fontSize='sm' ml="2" color="gray.400">2000000</Text>
          </Flex>
        </WrapItem>
        <WrapItem pl="8" flex="1">
          <InputGroup size="sm">
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type='search' placeholder='Search' bgColor="white" />
          </InputGroup>
        </WrapItem>
      </Wrap>
    </Box>
  )
}
