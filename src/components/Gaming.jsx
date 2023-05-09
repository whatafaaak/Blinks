import React from 'react'
import { SimpleGrid, Flex, chakra, Box, Button } from '@chakra-ui/react';
import { /*useState, */ lazy/*, Suspense*/ } from 'react'

const Deck = lazy(() => import('./Deck.tsx'))
export default function Gaming() {
  return (
    <SimpleGrid
    mt={'100px'}
    p={'100px'}
  columns={{
    base: 1,
    md: 2,
  }}
  spacing={0}
>
  <Flex display={'block'} bg="brand.400">
  
  <Deck/>
  
  </Flex>
  <Flex
    direction="column"
    alignItems="start"
    justifyContent="center"
    px={{
      base: 4,
      md: 8,
      lg: 20,
    }}
    py={24}
    zIndex={3}
  >
    <chakra.span
      color="brand.600"
      _dark={{
        color: "gray.300",
      }}
      fontSize="lg"
      textTransform="uppercase"
      fontWeight="extrabold"
    >
      Explore worlds in text
    </chakra.span>
    <chakra.h1
      mb={4}
      fontSize={{
        base: "4xl",
        md: "4xl",
        lg: "5xl",
      }}
      fontWeight="bold"
      color="brand.600"
      _dark={{
        color: "gray.300",
      }}
      lineHeight="shorter"
      textShadow="2px 0 currentcolor"
    >
      Discover Blink
    </chakra.h1>
    <chakra.p
      pr={{
        base: 0,
        lg: 16,
      }}
      mb={4}
      fontSize="lg"
      color="brand.600"
      _dark={{
        color: "gray.400",
      }}
      letterSpacing="wider"
    >
      "Embark on an epic journey through a text-based adventure where every decision you make 
      carries the weight of your destiny. Forge your own path, overcome obstacles, and reap the 
      rewards of your triumphs as collectible NFTs. Your choices will shape your story - are you 
      ready to seize your destiny?"
    </chakra.p>
    <Box display="inline-flex" rounded="md" >
      <chakra.a
        mt={2}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={5}
        py={3}
        
        fontWeight="bold"
        w="full"
        
        
        
      ><Button>
        Read more
        </Button>
      </chakra.a>
    </Box>
  </Flex>
</SimpleGrid>
  )
}
