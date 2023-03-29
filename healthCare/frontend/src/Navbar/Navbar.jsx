import { Box, Button, Image, Input, InputGroup, Icon, Text, Link, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import {FiShoppingCart } from 'react-icons/fi';
import React, { useState } from 'react'
import logo from '../Assets/logo.jpg'


export default function Navbar() {
    const [display,changeDisplay] = useState('none');
  return (
    <Box  bg="white" zIndex={0} w="100%" position="sticky" p="10px 0px" borderBottom={'2px solid lightgrey'}>
    <Box display="flex" w={["100%", "95%", "85%"]} m="auto" justifyContent="space-between" alignItems="center">
    <Box display="flex">
    <IconButton  aria-label="Open Menu"  bg="none" size="lg" p="0px" _hover={{bg:"none",cursor:"pointer"}} mr={1} color="black" icon={<HamburgerIcon w="1.5em" h="1.5em" />}  display={["flex","flex","none"]} onClick={()=> changeDisplay('flex')} />
      <Link href="/">
        <Image m="0px" h="50px" src={logo} alt="logo" />
      </Link>
    </Box>
    <Box w={["40%", "40%", "50%"]} display={["flex", "flex", "flex"]}>
      <InputGroup m="0px" bg="#f1f4f4" rounded="5px" gap={["3px", "6px", "10px"]} w="100%" display="flex" alignItems="center" p={["2px 4px", "4px 8px", "7px 15px"]} 
      fontSize={["12px", "14px", "17px"]}>
        <Icon m="0px" pointerEvents='none' color='#999999'children={<Search2Icon />}/>
        <Input h={["14px", "19px", "30px"]} m="0px" bg="none" w="100%" border="none" p={["4px", "7px", "13px"]} outline="0px solid black"
         type='search' variant={'unstyled'} fontSize={["12px", "14px", "12px"]} placeholder='Search for products and brands...' />
      </InputGroup>
    </Box>
    <Box w="17%" display="flex" justifyContent="space-between" alignItems="center">
   <Button display={["none", "none", "flex"]} m="0px" p="11px 25px" rounded="5px" border="none" bg="#2eb8b8" fontSize="18px" color="white">Login</Button>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Link display={["flex", "flex", "flex"]} href="/cart">
        <Icon m="0px" boxSize="25px" as={FiShoppingCart} />
        </Link>
      </Box>
    </Box>
  </Box>
    </Box>
  )
}
