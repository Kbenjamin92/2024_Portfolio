import { Box, Heading, Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <>
    <Box padding={5}>
        <Heading>
            About Me
        </Heading>
        <Box w='14rem' h={2} bg='red.600' marginY={2}></Box>
        <Text fontSize={{
                base: '16px',
                lg: '18px'
                        }}>
            Experienced full stack engineer adept at crafting seamless, 
            user-centric applications. Proficient in a variety of technologies, 
            with a passion for creating innovative solutions that drive impactful 
            user experiences. My passion has been marked by a commitment to innovation, 
            problem-solving, and continuous learning. 
        </Text>
    </Box>
    </>
  )
}
