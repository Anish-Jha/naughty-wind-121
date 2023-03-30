import { Box, Button } from '@chakra-ui/react';
import React from 'react'
import { useState,useEffect } from 'react';
import './css/Slider1.css'
import { FiShoppingCart } from 'react-icons/fi';
import { SlHeart } from 'react-icons/sl';

function Slider2() {
  const items = [
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'

    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
    {
      title: "MuscleBlaze Raw Whey Protein",
      description: "80% Powder, 1 kg unflavoured",
      imageUrl: "https://via.placeholder.com/150x150",
      price:'₹ 1699'
    },
  ];
  
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft=()=>{
    const container = document.querySelector(".scroll-wrap");
    setScrollPosition(scrollPosition - container.offsetWidth);
    container.scrollLeft -= container.offsetWidth;
  }
  
  const handleScrollRight=()=>{
    const container = document.querySelector(".scroll-wrap");
    setScrollPosition(scrollPosition + container.offsetWidth);
    container.scrollLeft += container.offsetWidth;
  }

  return (
    <Box>
    <Box className="scroll-wrap">
      {items.map((item, index) => (
        <Box key={index} border='1px solid rgba(136, 133, 133, 0.781)' borderRadius={'10px'} className="item">
          <img src={item.imageUrl} alt={item.title} />
          <Box position='absolute' top={'10px'} right={'10px'} fontSize='30px'>
          <SlHeart/>
          </Box>  
          <h3>{item.title}</h3>
          <h3>{item.description}</h3>
          <p>{item.price} <span style={{color:"green",marginLeft:"30px",fontSize:"13px"}}>15% off</span></p>
          <Button gap={'5px'} color='orange' border={'1px solid orange'} width='88%' padding={'8px'} bgColor='#faefe5' marginBottom={'15px'} marginTop='20px' _hover={{bgColor:"orange", color:"white"}}><FiShoppingCart/> Add to Cart</Button>
        </Box>
      ))}
    </Box>
    <Button onClick={handleScrollLeft} position={'absolute'} borderRadius='full' bgColor={'#bee7f5'} fontSize='20px' fontWeight={'700'}
    marginLeft='-43%' marginTop={'-20%'}>{"<"}</Button>
    <Button onClick={handleScrollRight} position={'absolute'} borderRadius='full' bgColor={'#bee7f5'} fontSize='20px' fontWeight={'700'}
    marginLeft='39%' marginTop={'-20%'}>{">"}</Button>
    </Box>
  );
}

export default Slider2;
