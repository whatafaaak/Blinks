import React from 'react'
import { SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text, Box, Image } from '@chakra-ui/react'
import whatafaaak from '../assets/img/whatafaaak.jpg'
import laranna from '../assets/img/laranna.jpg'
import { motion } from 'framer-motion'

export default function Team() {
  return (
    <><Heading textAlign={'center'}mb={'50px'} mt={'-50px'}>Team</Heading>
    <Box
          mb={'150px'}
          display={'flex'}
          justifyContent={'center'}
          textAlign={'center'}
      >
          <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card borderRadius={'30px'} 
                    as={motion.div} 
                    whileHover={{ y:-5 }}
                    /*whileTap={{ scale: 0.9 }}
                    animate={{x:200}}*/
                    transition='0.2s linear'>
                  <CardHeader>
                  <Image src={laranna} borderRadius={'full'} />
                      <Heading size='md'mt={'10px'} mb={'-10px'}> Laranna</Heading>
                  </CardHeader>
                  <CardBody padding={'0px'}>
                      <Text>Co-Founder<br/>
                        Artist
                      </Text>
                  </CardBody>
                  <CardFooter display={'block'}>
                      <Button bg={'blue.500'}>Twitter</Button>
                  </CardFooter>
              </Card>
              <Card borderRadius={'30px'} 
                    as={motion.div} 
                    whileHover={{ y:-5 }}
                    /*whileTap={{ scale: 0.9 }}
                    animate={{x:200}}*/
                    transition='0.2s linear'>
                  <CardHeader>
                    <Image src={whatafaaak} borderRadius={'full'}/>
                      <Heading size='md' mt={'10px'} mb={'-10px'}> Whatafaaak</Heading>
                  </CardHeader>
                  <CardBody padding={'0px'}>
                      <Text >Co-Founder<br/>Dev</Text>
                  </CardBody>
                  <CardFooter display={'block'}>
                      <Button bg={'blue.500'}>Twitter</Button>
                  </CardFooter>
              </Card>
          </SimpleGrid>
      </Box></>
  )
}
