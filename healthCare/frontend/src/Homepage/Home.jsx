import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Slider1 from './Slider1';
import TopSlider from './TopSlider';
import image1 from './Poster/image1.jpg'
import image2 from './Poster/image2.jpg'
import image3 from './Poster/image3.jpg'
import image4 from './Poster/image4.jpg'
import image5 from './Poster/image5.jpg'
import image6 from './Poster/image6.jpg'
import image7 from './Poster/image7.jpg'
import image8 from './Poster/image8.jpg'
import image9 from './Poster/image9.jpg'
import image10 from './Poster/image10.jpg'
import image11 from './Poster/image11.jpg'
import image12 from './Poster/image12.jpg'
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import MiddleSlider from './MiddleSlider';

export default function Home() {
    
    const responsive={
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 480 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
    };
    
  return (
    <>
      <Box bgColor={'#e4f7ff'} width={'100%'} textAlign='center' p='10px'>
      India's Largest D2C Nutrition Platform
      </Box>
      <Box>
      <TopSlider/>
      </Box>

      <Box width={'85%'} cursor='pointer' margin='auto' responsive={responsive}>
      <Heading fontSize={'26px'} textAlign={'left'} marginBottom='10px'>Price Slash Alert</Heading>
      <Box>
      <Slider1/>
      </Box>
      </Box>

      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>

      <Box display={['none','flex','flex']} width={'80%'} justifyContent='center' cursor='pointer' margin={'auto'} gap='10px' responsive={responsive}>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image1}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image2}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image3}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image4}/>
      </Box>

      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>

      <Box width={'85%'} cursor='pointer' margin='auto' responsive={responsive}>
      <Heading fontSize={'26px'} textAlign={'left'} marginBottom='10px'>Best Price Zone</Heading>
      <Box>
      <Slider2/>
      </Box>
      </Box>
      
      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>

      <Box width={'85%'} cursor='pointer' margin={'auto'} responsive={responsive}>
      <Heading fontSize={'26px'} textAlign={'left'} marginBottom='20px'>Bodybuilding Goals</Heading>
      <Box width={'100%'} display={['block','flex','flex']} justifyContent='center' cursor='pointer' margin={'auto'} gap='10px' responsive={responsive}>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image5}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image6}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image7}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image8}/>
      </Box>
      </Box>

      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>

      <Box width={'85%'} cursor='pointer' margin='auto' responsive={responsive}>
      <Heading fontSize={'26px'} textAlign={'left'} marginBottom='10px'>Wellness Range</Heading>
      <Box>
      <Slider3/>
      </Box>
      </Box>

      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>

      <Box width={'85%'} margin={'auto'} borderRadius={'10px'}>
      <MiddleSlider/>
      </Box>

      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>

      <Box width={'85%'} cursor='pointer' margin={'auto'} responsive={responsive}>
      <Heading fontSize={'26px'} textAlign={'left'} marginBottom='20px'>Picks You Can't Miss</Heading>
      <Box width={'100%'} display={['block','flex','flex']} justifyContent='center' cursor='pointer' margin={'auto'} gap='10px' responsive={responsive}>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image9}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image10}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image11}/>
        <Image className='posters' borderRadius={'10px'} width='280px' src={image12}/>
      </Box>
      </Box>

      <Box width='100%' h='10px' bgColor={'#e0dfdf'} marginTop='40px' marginBottom={'40px'}>
      </Box>



    </>
  )
}
