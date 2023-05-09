import {  Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import meter1 from "../assets/img/banner.jpg";

export default function Lore() {
  return (
    <Flex 
    height={'300px'}
    alignItems={'center'}
    backgroundImage={meter1} 
    backgroundRepeat={'no-repeat'} 
    backgroundSize={'1500px'}
    backgroundPosition={'center'}
    mt={'100px'}
    >
        
    <Container textAlign={'center'} maxWidth={'1000px'} >
    
        <h2 className='font-face-cosmic'>Blinks Lore</h2>
        <br/>
        <Text color={'#fff6da'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
            Lorem Ipsum.</Text>
        </Container>
        </Flex>
  )
}
