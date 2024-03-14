import { 
  Box, 
  Button, 
  HStack, 
  Heading, 
  Icon, 
  Link, 
  Popover, 
  PopoverBody, 
  PopoverCloseButton, 
  PopoverContent, 
  PopoverTrigger, 
  Portal, 
  Show, 
  Text } from "@chakra-ui/react"
import resume from '../assets/KippB_2024_Resume.pdf';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
    <HStack justifyContent={{
        base: 'space-between',
        lg: 'space-around'
    }}>
      <Heading>
        <Text 
          color='whiteAlpha.900'
          fontSize={{
            base: '20px',
            sm: '30px',
            md: '30px',
            lg: '33px'
        }}>
         Kipp Benjamin's Portfolio
        </Text>
        <Box w='14rem' h={2} bg='red.600' marginY={2}></Box>
      </Heading>
      <Show above='md'>
        <Link href={resume} download>
         <Button bg='red.500'>
          <Icon as={BsDownload} paddingRight={2} boxSize={6} color='#fff'/>
            <Text color='#fff'>
              Download Resume
            </Text>
         </Button>
        </Link>
      </Show>
      <Show below='md'>
        <Popover>
          <PopoverTrigger>
            <Button>
              <Icon as={RxHamburgerMenu} boxSize={6}/>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody>
                <Link href={resume} download>
                  <Button bg='red.500'>
                    <Icon as={BsDownload} paddingRight={2} boxSize={6} />
                      <Text>
                        Download Resume
                      </Text>
                  </Button>
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Show>
    </HStack>
    </>
  )
}

