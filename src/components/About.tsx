import { 
  Box, 
  Divider, 
  Heading, 
  Text } from '@chakra-ui/react'

export const About = () => {
  return (
    <>
    <Box padding={5} marginTop={6}>
        <Heading color='whiteAlpha.100'>
            About Me
        </Heading>
        <Box 
          w='14rem' 
          h={2} 
          bg='red.600' 
          marginY={2}
          marginBottom={5}></Box>
        <Text fontSize={{
                base: '16px',
                lg: '18px'
                        }}
              color='whiteAlpha.100'>
            Experienced full stack software engineer adept at crafting seamless, 
            user-centric applications. Proficient in a variety of technologies, 
            with a passion for creating innovative solutions that drive impactful 
            user experiences. My passion has been marked by a commitment to innovation, 
            problem-solving, and continuous learning. 
        </Text>
        <Divider marginTop={10}/>
    </Box>
    </>
  )
}
