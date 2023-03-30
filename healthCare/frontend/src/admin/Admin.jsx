import { Box, Button, Center, Flex, Heading, Hide, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import {BiUser} from "react-icons/bi"
import {FiSettings } from "react-icons/fi";
import Products from './adminComponent/Products';
import Pagination from './adminComponent/Pagination';
import Dashboard from './adminComponent/Dashboard';
import Admins from './adminComponent/Admins';
import Settings from './adminComponent/Settings';

const Admin = () => {

  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState(1);
  const [productComState, setProductComState] = useState(false);
  const [dashboardComState, setDashboardComState] = useState(true);
  const [adminsComState, setAdminsComState] = useState(false);
  const [settingsComState, setSettingsComState] = useState(false);

  const handleProductsCom = () => {
   setProductComState(true);
   setDashboardComState(false);
   setAdminsComState(false);
   setSettingsComState(false);
  }

  const handleDashboardCom = () =>{
    setDashboardComState(true);
    setProductComState(false);
    setAdminsComState(false)
    setSettingsComState(false);
  }

  const handleAdminsCom = () => {
    setAdminsComState(true);
    setDashboardComState(false);
    setProductComState(false);
    setSettingsComState(false);
  }

  const handleSettingsCom = () => {
    setSettingsComState(true);
    setAdminsComState(false);
    setDashboardComState(false);
    setProductComState(false);
  }

  const getData = async() =>{
  const res = await fetch("http://localhost:8080/data");
  const resData = await res.json();
  console.log(resData)
  setData(resData)
  };

  const handlePagination = (page) =>{
    setPageData(page)
console.log(page)
  }

  useEffect(()=>{
    getData()
  },[])

  const bor="1px solid black"
  return (
    <>
     <Box border="2px solid black" w="98%" m="auto" h="100vh" mt="40px" display="flex" justifyContent="space-between">

      {/* sidebar */}
      <Box border="2px solid red" w="20%" h="70vh">
        <Center>
        <Text as="b" fontSize="20px">Menu</Text>
        </Center>
         
         <Flex w="80%" h="80%" border={bor} m='auto' justifyContent="space-between">
          <Box border={bor} h="100%" w={{lg:"25%", md:"25%", sm:"100%"}} display="flex" flexDirection="column" justifyContent="space-around">
             <AiFillHome onClick={handleDashboardCom} size="25px"/>
             <BsClipboardData onClick={handleProductsCom} size="25px"/>
             <BiUser onClick={handleAdminsCom} size="25px"/>
             <FiSettings onClick={handleSettingsCom} size="25px"/>
          </Box>

          <Box border={bor} h="100%" w="68%" display={{lg:"block", md:"block", base:"none"}} >
            <Box  border={bor} h="100%" w="100%" display="flex" flexDirection="column" justifyContent="space-around">
            <Text fontWeight="medium" display={{lg:"block", md:"block", sm:"none"}} fontSize={{lg:"18px", md:"15px"}} onClick={handleDashboardCom}>Dashboard</Text>  
            <Text fontWeight="medium" fontSize={{lg:"18px", md:"15px"}} onClick={handleProductsCom}>Products</Text>
            <Text fontWeight="medium" fontSize={{lg:"18px", md:"15px"}} onClick={handleAdminsCom}>Admins</Text>
            <Text fontWeight="medium" fontSize={{lg:"18px", md:"15px"}} onClick={handleSettingsCom}>Settings</Text>
            </Box>
            
          </Box>
          
         </Flex>
     </Box>

     {/* components */}
     <Box border={bor} w="75%" h="90%" >
      {
        dashboardComState ? 
        <>
        <Dashboard />
        </>
        :
         adminsComState ? 
         <>
         <Admins />
         </>
         :
         settingsComState ?
         <>
         <Settings />
         </>
         :
        <>
         <Box border={bor} w="100%" h="90%" display="grid" gridTemplateColumns="repeat(4,1fr)" overflowY="scroll">
        <Products data={data} pageData={pageData}/>
        </Box>
  
        <Box border={bor} m="auto" h="10%" display="flex" alignItems="center" justifyContent="center">
        <Pagination handlePagination={handlePagination}/>
        </Box>
        </>
         
      }
     
     </Box>
     
     </Box>
     
    
    </>
    
  )
}

export default Admin