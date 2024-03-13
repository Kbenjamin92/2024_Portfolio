import { 
  Box, 
  Button, 
  HStack, 
  Heading, 
  Link, 
  Show, 
  Text } from "@chakra-ui/react"
import resume from '../assets/KippB_2024_Resume.pdf';

export const Navbar = () => {
  return (
    <>
    <HStack justifyContent='space-around'>
      <Heading>
        <Text 
          color='whiteAlpha.900'
          fontSize={{
            base: '20px',
            sm: '30px',
            md: '30px',
            lg: '33px'
        }}>
         Kipp Benjamin Jr Portfolio
        </Text>
        <Box w='14rem' h={2} bg='red.600' marginY={2}></Box>
      </Heading>
      <Show above='md'>
        <Link href={resume} download>
         <Button bg='red.500'>
            <Text>
              Download Resume
            </Text>
         </Button>
        </Link>
      </Show>
    </HStack>
    </>
  )
}

