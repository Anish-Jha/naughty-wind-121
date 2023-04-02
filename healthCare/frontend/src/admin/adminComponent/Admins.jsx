import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Admins = () => {
  const bor = "1px solid red"

  return (
    <>
  <Box border={bor} w="100%" h="max-content"  display="grid" gridTemplateColumns={{lg:"repeat(4,1fr)", md:"repeat(3,1fr)",sm:"repeat(2,1fr)",base:"repeat(1,1fr)"}} gap="10px">

<Box border={bor} w="90%" h="300px">
  <Image src="https://bit.ly/dan-abramov" w="100%" h="70%"></Image>
  <Text>Name : Raj</Text>
  <Text>Mobile : 8986730767</Text>
  <Flex gap="10px">
    <BsLinkedin/>
    <BsGithub />
    <BsInstagram />
    <BsTwitter />
  </Flex>
</Box>
<Box border={bor} w="90%" h="300px">
  <Image src="https://bit.ly/dan-abramov" w="100%" h="70%"></Image>
  <Text>Name : Raj</Text>
  <Text>Mobile : 8986730767</Text>
  <Flex gap="10px">
    <BsLinkedin/>
    <BsGithub />
    <BsInstagram />
    <BsTwitter />
  </Flex>
</Box>
<Box border={bor} w="90%" h="300px">
  <Image src="https://bit.ly/dan-abramov" w="100%" h="70%"></Image>
  <Text>Name : Raj</Text>
  <Text>Mobile : 8986730767</Text>
  <Flex gap="10px">
    <BsLinkedin/>
    <BsGithub />
    <BsInstagram />
    <BsTwitter />
  </Flex>
</Box>
<Box border={bor} w="90%" h="300px">
  <Image src="https://bit.ly/dan-abramov" w="100%" h="70%"></Image>
  <Text>Name : Raj</Text>
  <Text>Mobile : 8986730767</Text>
  <Flex gap="10px">
    <BsLinkedin/>
    <BsGithub />
    <BsInstagram />
    <BsTwitter />
  </Flex>
</Box>
<Box border={bor} w="90%" h="300px">
  <Image src="https://bit.ly/dan-abramov" w="100%" h="70%"></Image>
  <Text>Name : Raj</Text>
  <Text>Mobile : 8986730767</Text>
  <Flex gap="10px">
    <BsLinkedin/>
    <BsGithub />
    <BsInstagram />
    <BsTwitter />
  </Flex>
</Box>
</Box>
    </>
  )
}

export default Admins