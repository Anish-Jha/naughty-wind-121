import { Box, Button, Center, Flex, Heading, Hide, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import {BiUser} from "react-icons/bi"
import {FiSettings } from "react-icons/fi";


const Admin = () => {
  const bor="1px solid black"
  return (
    <>
     <Box border="2px solid black" w="98vw" m="auto" h="2000px" mt="40px">

      {/* sidebar */}
      <Box border="2px solid red" w="20vw" h="70vh" float="left" position="fixed">
        <Center>
        <Text as="b" fontSize="20px">Menu</Text>
        </Center>
         
         <Flex w="80%" h="80%" border={bor} m='auto' justifyContent="space-between">
          <Box border={bor} h="100%" w={{lg:"25%", md:"25%", sm:"100%"}} display="flex" flexDirection="column" justifyContent="space-around">
             <AiFillHome size="25px"/>
             <BsClipboardData size="25px"/>
             <BiUser size="25px"/>
             <FiSettings size="25px"/>
          </Box>

          <Box border={bor} h="100%" w="68%" display={{lg:"block", md:"block", sm:"none"}} >
            <Box  border={bor} h="100%" w="100%" display="flex" flexDirection="column" justifyContent="space-around">
            <Text fontWeight="medium" display={{lg:"block", md:"block", sm:"none"}} fontSize={{lg:"18px", md:"15px"}}>Dashboard</Text>  
            <Text fontWeight="medium" fontSize={{lg:"18px", md:"15px"}}>Products</Text>
            <Text fontWeight="medium" fontSize={{lg:"18px", md:"15px"}}>Users</Text>
            <Text fontWeight="medium" fontSize={{lg:"18px", md:"15px"}}>Setting</Text>
            </Box>
            
          </Box>
          
         </Flex>
     </Box>

     {/* components */}
     <Box border={bor} w="75vw" h="90%" float="right" display="grid" gridTemplateColumns="repeat(4,1fr)">
      <Text fontSize={{}}>Hello</Text>
  
     </Box>
     
     </Box>
     
    
    </>
    
  )
}

export default Admin