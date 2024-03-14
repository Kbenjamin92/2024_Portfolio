import {
    Avatar,
    Box,
    Grid, 
    GridItem, 
    HStack, 
    Heading, 
    Icon, 
    Text } from "@chakra-ui/react"
import headshot from '../assets/HeadShot.jpeg'
import { PiHandWavingBold } from "react-icons/pi";

export const Header = () => {
  return (
    <>
    <Grid bg='gray.800' paddingBottom={5}>
        <HStack>
            <GridItem padding='35px'>
                <Avatar 
                    boxShadow='dark-lg' 
                    size={{
                        base: '2xl',
                        md: '2lg',
                        lg: '3xl' 
                    }}
                    name='Kipp Benjamin Jr' 
                    src={headshot}/>
            </GridItem>
            <GridItem padding='0px'>
                <Heading>
                    <Text 
                        color='whiteAlpha.900' 
                        fontSize={{
                            base: '29px',
                            sm: '40px',
                            md: '60px',
                            lg: '90px'
                        }}
                        >
                        Hi! <Icon className='hand-wave' paddingLeft={2} as={PiHandWavingBold} /> <br/>
                        I'm a
                        Full Stack Software Engineer
                    </Text>
                    <Box 
                        w={{
                            base: 100,
                            md: 300,
                            lg: 500
                        }} 
                        h={{
                            base:2,
                            md: 3,
                            lg: 4
                        }} 
                        bg='red.600' 
                        marginY={2}></Box>
                </Heading>
            </GridItem>
        </HStack>
    </Grid>
    </>
  )
}

