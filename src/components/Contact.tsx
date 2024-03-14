import { 
    Box, 
    HStack, 
    Heading, 
    Icon, 
    Link, 
    Text, } from "@chakra-ui/react"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { 
    linkdedInLink, 
    gitHubLink, 
    youTubeLink, 
    emailLink } from "../links";

export const Contact = () => {
  return (
    <>
    <Box padding={5} marginTop={8}>
        <Heading>
            Follow Me
        </Heading>
        <Box w='14rem' h={2} bg='red.600' marginY={2}></Box>
        <HStack flexWrap='wrap' paddingTop={5}>
            <Box>
                <Link href={linkdedInLink} target="_blank">
                    <Icon as={BsLinkedin} boxSize='40px'/>
                    <Text>LinkedIn</Text>
                </Link>
            </Box>
            <Box>
                <Link href={gitHubLink} target="_blank">
                    <Icon as={BsGithub} boxSize='40px'/>
                    <Text>GitHub</Text>
                </Link>
            </Box>
            <Box>
                <Link href={youTubeLink} target="_blank">
                    <Icon as={BsYoutube} boxSize='40px'/>
                    <Text>YouTube</Text>
                </Link>
            </Box>
            <Box>
                <Link href={emailLink} target="_blank">
                    <Icon as={MdEmail} boxSize='40px'/>
                    <Text>Email</Text>
                </Link>
            </Box>
        </HStack>
    </Box>
      
    </>
  )
}

