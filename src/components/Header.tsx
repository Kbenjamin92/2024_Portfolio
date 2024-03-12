import {
    Avatar,
    Box,
    Grid, 
    GridItem, 
    HStack, 
    Heading, 
    Text } from "@chakra-ui/react"
import headshot from '../assets/HeadShot.jpeg'

export const Header = () => {
  return (
    <>
    <Grid bg='gray.800'>
        <HStack>
            <GridItem padding='90px'>
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
            <GridItem padding='10px'>
                <Heading>
                    <Text 
                        color='whiteAlpha.900' 
                        fontSize={{
                            md: '60px',
                            lg: '100px'
                        }}>
                        Front-End Engineer
                    </Text>
                    <Box w='32rem' h={4} bg='red.600' marginY={2}></Box>
                </Heading>
            </GridItem>
        </HStack>
    </Grid>
    </>
  )
}

