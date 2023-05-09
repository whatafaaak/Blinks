import React from 'react'
import { Button, useColorMode, Box, Flex, Stack, useColorModeValue, Spacer, HStack, Link } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/img/logo.png'


export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} wrap={'wrap'} gap={'5'}>
          <Box ml={'30px'} className='font-face-cosmic' fontSize={'30px'}><a className='a-blinks' href="www.google.es" cursor="pointer"><img width="70px" src={logo} alt='logo'/></a></Box>
         
          <Spacer/>
          <HStack spacing={'50px'} mr={'250px'}>
          <Box ><Link>Home</Link></Box>
          <Box><Link>The Game</Link></Box>
          <Box><Link>Lore</Link></Box>          
          <Box><Link>Features</Link></Box>
          <Box><Link>Roadmap</Link></Box>
          <Box><Link>Projects</Link></Box>
          </HStack>
          
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              </Stack>
              </Flex>
              <Button mr={'50px'} colorScheme='purple'>Connect</Button>
              </Flex>
              </Box>
  )
}
