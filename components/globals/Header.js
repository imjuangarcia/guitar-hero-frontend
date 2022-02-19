import { Heading, Text, Box, Wrap, WrapItem, Divider, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box>
      <Heading size="lg" mt="4" color="gray.900">
        Guitar Hero
      </Heading>
      <Text mt="2" color="gray.600">
        An app to easily find and compare used guitars 🎸🤘
      </Text>
      <Wrap mt="4" align="center">
        <WrapItem p="1" border="solid" borderWidth="1px" borderRadius="4" borderColor="gray.100" alignItems="center">
          <Image
            boxSize='28px'
            objectFit='contain'
            src='/images/logos/meli.png'
            alt='Mercadolibre'
            mr="1"
          />
          <Text fontSize="xs" fontWeight="semibold" textTransform="uppercase" color="gray.600" letterSpacing="1px" pr="1">Mercadolibre</Text>
        </WrapItem>
      </Wrap>
      <Divider mt="8" />
    </Box>
  )
}
